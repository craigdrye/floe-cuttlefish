import { makeQuestionBank } from './base'
import type { Question } from './types'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]
const source = 'Floe dataStructures top-up'

export const dataStructuresUniv103TopUpQuestions: Question[] = makeQuestionBank('University', [
  // ---------------- Chapter 1: Arrays and Dynamic Arrays ----------------
  {
    id: 7746000,
    chapter: 'Arrays and Dynamic Arrays',
    title: 'Amortized Append Cost',
    prompt: 'A dynamic array doubles its capacity whenever it becomes full. What is the amortized time complexity of a single append (push_back) operation?',
    correct: 'O(1) amortized',
    wrong: [
      miss('O(n) per operation', 'The occasional resize copies all n elements, but that cost is spread across the n cheap appends that preceded it.', 'Average the rare resize cost over the many cheap appends.'),
      miss('O(log n) amortized', 'Doubling makes the number of resizes logarithmic, but the total copy work is linear, giving constant amortized cost, not logarithmic.', 'Sum the geometric series of copy costs and divide by n.'),
      miss('O(n log n) amortized', 'This overstates the work; the total cost of n appends including all resizes is O(n), not O(n log n).', 'Think about the total work to grow from 1 to n elements.'),
    ],
    lesson: 'With geometric (doubling) growth, the total cost of n appends is O(n) because the copy costs form a geometric series 1 + 2 + 4 + ... + n that sums to about 2n. Dividing the total O(n) work across n operations yields O(1) amortized per append, even though individual resize operations are O(n).',
    source,
    generated: true,
  },
  {
    id: 7746001,
    chapter: 'Arrays and Dynamic Arrays',
    title: 'Why Geometric Growth',
    prompt: 'If a dynamic array grew by adding a fixed constant k slots each time it filled, what would the amortized cost of an append become?',
    correct: 'O(n) amortized, because resizes happen every k appends and each copies a linearly growing array',
    wrong: [
      miss('O(1) amortized, the same as doubling', 'Constant-increment growth triggers far more frequent resizes, so the total copy work becomes quadratic rather than linear.', 'Count how many resizes occur and how large each copy is.'),
      miss('O(log n) amortized', 'Logarithmic behavior comes from geometric growth; constant-increment growth gives linear amortized cost.', 'Constant increments do not reduce resize frequency logarithmically.'),
      miss('O(n^2) amortized', 'The total work for n appends is O(n^2), but per-operation amortized cost is that total divided by n, giving O(n).', 'Divide total work by the number of operations to get amortized cost.'),
    ],
    lesson: 'Growing by a constant k forces a resize roughly every k appends, and the i-th resize copies about i*k elements. Summing these copies gives O(n^2) total work, so the amortized cost per append is O(n). Geometric (multiplicative) growth is what makes append O(1) amortized.',
    source,
    generated: true,
  },

  // ---------------- Chapter 2: Linked Lists ----------------
  {
    id: 7746002,
    chapter: 'Linked Lists',
    title: 'Insertion at a Known Node',
    prompt: 'In a singly linked list, what is the worst-case time to insert a new node immediately after a node you already hold a pointer to?',
    correct: 'O(1)',
    wrong: [
      miss('O(n)', 'You do not need to traverse the list because you already have the predecessor node; only a few pointer reassignments are required.', 'You already hold the node, so no search is needed.'),
      miss('O(log n)', 'Linked lists have no index structure to enable logarithmic operations; the insert here is purely local pointer work.', 'There is no binary-search-like structure in a plain linked list.'),
      miss('O(n) because nodes must be shifted', 'Linked lists do not shift elements in memory the way arrays do; insertion only redirects pointers.', 'Pointer relinking avoids the shifting that arrays require.'),
    ],
    lesson: 'Given a pointer to a node, inserting after it requires only setting the new node next to the current next, then pointing the current node to the new node — constant time. The expensive part of linked-list insertion is finding the position (O(n)), not the insertion itself.',
    source,
    generated: true,
  },
  {
    id: 7746003,
    chapter: 'Linked Lists',
    title: 'Cycle Detection',
    prompt: 'Floyd cycle-detection (the tortoise and hare algorithm) detects a loop in a linked list using how much extra space?',
    correct: 'O(1) extra space',
    wrong: [
      miss('O(n) extra space for a hash set of visited nodes', 'That is the hash-set approach; Floyd algorithm avoids it by using only two pointers moving at different speeds.', 'Floyd method needs only a couple of pointers, not a set.'),
      miss('O(log n) extra space', 'The algorithm does not use any logarithmic-sized auxiliary structure; it uses two pointers.', 'Count the pointers Floyd algorithm maintains.'),
      miss('O(n) extra space to store node positions', 'No position array is needed; the two pointers meeting inside the cycle proves a loop exists.', 'The meeting of fast and slow pointers is the entire mechanism.'),
    ],
    lesson: 'Floyd algorithm advances a slow pointer one step and a fast pointer two steps per iteration. If a cycle exists the fast pointer eventually laps and meets the slow one inside the loop. It uses only two pointers, giving O(1) space and O(n) time, unlike the hash-set method which needs O(n) space.',
    source,
    generated: true,
  },

  // ---------------- Chapter 3: Stacks and Queues ----------------
  {
    id: 7746004,
    chapter: 'Stacks and Queues',
    title: 'Implementing a Queue with Two Stacks',
    prompt: 'A queue is implemented using two stacks (an in-stack and an out-stack). What is the amortized time per enqueue or dequeue operation?',
    correct: 'O(1) amortized',
    wrong: [
      miss('O(n) per dequeue always', 'A dequeue is O(n) only when the out-stack is empty and elements must be transferred; each element is moved at most once, so the amortized cost is constant.', 'Each element transfers between stacks at most once over its lifetime.'),
      miss('O(log n) amortized', 'There is no logarithmic structure here; the analysis is about how often the costly transfer happens, which makes it constant amortized.', 'Charge the transfer cost to the element being moved.'),
      miss('O(n) amortized', 'Although a single transfer can be O(n), it only happens after that many cheap pushes, so the amortized cost is O(1).', 'Spread the transfer cost over the operations that caused it.'),
    ],
    lesson: 'Enqueue pushes onto the in-stack in O(1). Dequeue pops from the out-stack; if it is empty, all elements are transferred from the in-stack (reversing order). Each element is pushed and popped on each stack at most once, so over a sequence of operations the total work is linear, giving O(1) amortized cost.',
    source,
    generated: true,
  },
  {
    id: 7746005,
    chapter: 'Stacks and Queues',
    title: 'Stack Application',
    prompt: 'Which classic problem is most naturally solved using a stack?',
    correct: 'Checking whether brackets in an expression are balanced',
    wrong: [
      miss('Finding the shortest path between two nodes in an unweighted graph', 'Shortest paths in an unweighted graph use breadth-first search, which relies on a queue, not a stack.', 'Shortest-path level-by-level exploration needs FIFO ordering.'),
      miss('Scheduling tasks fairly in first-come-first-served order', 'Fair first-come-first-served scheduling is the defining use case of a queue (FIFO), not a stack.', 'First-come-first-served is FIFO, which is a queue.'),
      miss('Maintaining a sorted collection with fast minimum lookup', 'A sorted collection with fast minimum lookup is the role of a heap or balanced tree, not a stack.', 'Order-based minimum retrieval points to a heap.'),
    ],
    lesson: 'Balanced-bracket checking is a canonical stack problem: each opening bracket is pushed and each closing bracket must match the most recently pushed (LIFO) opener. The last-in-first-out discipline of a stack exactly mirrors the nesting structure of brackets.',
    source,
    generated: true,
  },

  // ---------------- Chapter 4: Hash Tables ----------------
  {
    id: 7746006,
    chapter: 'Hash Tables',
    title: 'Open Addressing vs Chaining',
    prompt: 'Compared with separate chaining, what is a key disadvantage of open addressing (e.g., linear probing) as the load factor approaches 1?',
    correct: 'Performance degrades sharply due to primary clustering and long probe sequences',
    wrong: [
      miss('It requires storing a linked list at every bucket', 'Storing a linked list at each bucket is precisely the chaining approach; open addressing stores entries directly in the table.', 'Open addressing keeps elements in the array itself, not in lists.'),
      miss('It cannot use a hash function at all', 'Open addressing absolutely uses a hash function for the initial probe position; it just resolves collisions by probing other slots.', 'Both schemes compute an initial bucket with a hash function.'),
      miss('It permanently breaks once any deletion occurs', 'Deletions are handled with tombstone markers; they complicate the table but do not permanently break it.', 'Tombstones let probing continue past deleted slots.'),
    ],
    lesson: 'In open addressing, all entries live in the table array and collisions are resolved by probing alternative slots. As the load factor nears 1, probe sequences lengthen dramatically and linear probing suffers primary clustering, where occupied runs grow and merge. Chaining degrades more gracefully because each bucket simply grows its own list.',
    source,
    generated: true,
  },
  {
    id: 7746007,
    chapter: 'Hash Tables',
    title: 'Load Factor',
    prompt: 'The load factor of a hash table using separate chaining is defined as which ratio?',
    correct: 'Number of stored entries divided by the number of buckets',
    wrong: [
      miss('Number of buckets divided by the number of stored entries', 'This is the reciprocal of the actual definition; the load factor is entries over buckets.', 'The load factor measures how crowded each bucket is on average.'),
      miss('Number of collisions divided by the number of insertions', 'Collision rate is a related symptom but is not the definition of load factor.', 'Load factor is about occupancy, not directly about collision counts.'),
      miss('Number of bits in the hash code divided by the table size', 'Hash-code bit width is unrelated to the load factor, which concerns occupancy.', 'The definition only involves entries and buckets.'),
    ],
    lesson: 'The load factor alpha = n / m, where n is the number of stored entries and m is the number of buckets. With chaining and a good hash function, the expected length of each chain is alpha, so search and insert run in O(1 + alpha) expected time. Tables typically resize to keep alpha below a chosen threshold.',
    source,
    generated: true,
  },

  // ---------------- Chapter 5: Trees and Binary Search Trees ----------------
  {
    id: 7746008,
    chapter: 'Trees and Binary Search Trees',
    title: 'In-Order Traversal of a BST',
    prompt: 'For a valid binary search tree, what ordering of keys does an in-order traversal produce?',
    correct: 'The keys in ascending sorted order',
    wrong: [
      miss('The keys in the order they were inserted', 'Insertion order is not preserved by traversal; the in-order walk depends only on the tree shape and the BST property.', 'The BST property, not insertion history, governs in-order output.'),
      miss('The keys in descending sorted order', 'Standard in-order traversal (left, node, right) yields ascending order; visiting right before left would give descending.', 'Recall the left-node-right visiting sequence.'),
      miss('A level-by-level ordering from the root downward', 'Level-by-level ordering is breadth-first traversal, not in-order traversal.', 'Level order is a different traversal entirely.'),
    ],
    lesson: 'In a BST, every key in the left subtree is smaller and every key in the right subtree is larger than the node key. An in-order traversal visits left subtree, then the node, then the right subtree, which recursively emits keys in ascending order. This is why in-order traversal of a BST is effectively a sort.',
    source,
    generated: true,
  },
  {
    id: 7746009,
    chapter: 'Trees and Binary Search Trees',
    title: 'Worst-Case BST Search',
    prompt: 'Without any balancing, what is the worst-case time to search an unbalanced binary search tree holding n keys?',
    correct: 'O(n), when the tree degenerates into a linked-list-like chain',
    wrong: [
      miss('O(log n) in all cases', 'O(log n) holds only when the tree is balanced; inserting sorted keys creates a degenerate chain with O(n) height.', 'Consider what happens when keys are inserted in sorted order.'),
      miss('O(1) because of the binary search property', 'The BST property guides the path but does not guarantee a short path; an unbalanced tree can be as tall as n.', 'Search cost is proportional to tree height, which can be large.'),
      miss('O(n log n)', 'A single search visits at most one node per level, so its cost is bounded by the height, never n log n.', 'Search cost equals the path length, not n times log n.'),
    ],
    lesson: 'BST search cost is proportional to the height of the tree. A balanced BST has height O(log n), but if keys arrive in sorted (or reverse-sorted) order, each insertion extends one side, producing a chain of height n. That degenerate case gives O(n) search, which is exactly why self-balancing trees exist.',
    source,
    generated: true,
  },

  // ---------------- Chapter 6: Balanced Trees ----------------
  {
    id: 7746010,
    chapter: 'Balanced Trees',
    title: 'AVL Balance Invariant',
    prompt: 'What invariant does an AVL tree maintain at every node to guarantee O(log n) height?',
    correct: 'The heights of the two child subtrees differ by at most 1',
    wrong: [
      miss('The two child subtrees contain exactly the same number of nodes', 'AVL balances by subtree height, not by node count; perfectly equal node counts are neither required nor maintained.', 'The AVL condition is about subtree heights, not sizes.'),
      miss('Every root-to-leaf path passes through the same number of black nodes', 'That black-height equality is the red-black tree invariant, not the AVL balance condition.', 'You are describing a different balanced tree family.'),
      miss('No node may have more than two children, with no further restriction', 'That is merely the definition of a binary tree; it alone does not bound the height to O(log n).', 'Being binary is necessary but not sufficient for balance.'),
    ],
    lesson: 'An AVL tree requires that for every node the balance factor (left subtree height minus right subtree height) is in {-1, 0, +1}. This height constraint forces the overall height to stay within about 1.44*log2(n), guaranteeing O(log n) search, insert, and delete. Rotations restore the invariant after updates.',
    source,
    generated: true,
  },
  {
    id: 7746011,
    chapter: 'Balanced Trees',
    title: 'Red-Black Tree Property',
    prompt: 'Which of the following is a defining property of a red-black tree?',
    correct: 'No red node may have a red child (no two reds in a row), and every path from root to a null leaf has the same number of black nodes',
    wrong: [
      miss('Every node must be either the leftmost or rightmost in its subtree', 'This is not a red-black property and does not even describe a coherent tree rule.', 'Red-black rules are about node colors and black-height, not left/right position.'),
      miss('The root and all leaves must be red', 'In a red-black tree the root is black and the conventional null leaves are black, not red.', 'Recall which nodes are forced to be black.'),
      miss('The balance factor of every node must be in {-1, 0, +1}', 'That is the AVL invariant; red-black trees use color rules and black-height instead.', 'You are citing the AVL condition, not the red-black one.'),
    ],
    lesson: 'Red-black trees enforce: nodes are red or black, the root is black, red nodes cannot have red children, and every root-to-null-leaf path has equal black-height. These color rules keep the longest path at most twice the shortest, guaranteeing O(log n) height. They allow fewer rotations on update than AVL, at the cost of looser balance.',
    source,
    generated: true,
  },

  // ---------------- Chapter 7: Heaps and Priority Queues ----------------
  {
    id: 7746012,
    chapter: 'Heaps and Priority Queues',
    title: 'Building a Heap',
    prompt: 'What is the time complexity of building a binary heap from an unsorted array of n elements using the standard bottom-up heapify (Floyd method)?',
    correct: 'O(n)',
    wrong: [
      miss('O(n log n) because each of n elements is sifted down log n levels', 'This is the naive upper bound; a tighter analysis shows most nodes are near the bottom and sift down only a little, summing to O(n).', 'Weight each level by how many nodes it has versus how far they sift.'),
      miss('O(log n)', 'You must at least examine all n elements, so building the heap cannot be sublinear.', 'You cannot build a heap of n items in less than O(n) time.'),
      miss('O(n^2)', 'Bottom-up heapify is far cheaper than quadratic; its total sift-down work telescopes to linear.', 'Sum the per-level work carefully rather than assuming quadratic.'),
    ],
    lesson: 'Bottom-up heap construction calls sift-down starting from the last internal node up to the root. Although a single sift-down is O(log n), nodes deep in the tree (the majority) sift down only a few levels. Summing height*count across levels gives a series that converges to O(n), making heap construction linear, faster than n insertions one at a time.',
    source,
    generated: true,
  },

  // ---------------- Chapter 8: Graphs and Representations ----------------
  {
    id: 7746013,
    chapter: 'Graphs and Representations',
    title: 'Adjacency List vs Matrix',
    prompt: 'For a sparse graph with V vertices and E edges (E much smaller than V^2), why is an adjacency list usually preferred over an adjacency matrix?',
    correct: 'It uses O(V + E) space instead of O(V^2), saving memory when edges are few',
    wrong: [
      miss('It allows checking whether a specific edge (u, v) exists in O(1) worst case', 'Constant-time edge existence checks are the strength of the adjacency matrix; in a list you may scan a vertex neighbor list.', 'O(1) edge lookup favors the matrix, not the list.'),
      miss('It guarantees that every graph algorithm runs in O(V) time', 'Representation choice does not magically make all algorithms linear in V; traversal still depends on E.', 'No data structure makes graph traversal independent of edge count.'),
      miss('It stores edge weights more accurately than a matrix can', 'Both representations can store weights with equal precision; the difference is space and access pattern, not accuracy.', 'Accuracy of weights is identical between the two.'),
    ],
    lesson: 'An adjacency matrix uses O(V^2) space regardless of edge count and gives O(1) edge-existence checks. An adjacency list uses O(V + E) space and lists only actual neighbors, which is far more compact for sparse graphs. The trade-off is slower edge-existence queries (proportional to a vertex degree) in the list representation.',
    source,
    generated: true,
  },

  // ---------------- Chapter 9: Tries ----------------
  {
    id: 7746014,
    chapter: 'Tries',
    title: 'Trie Lookup Complexity',
    prompt: 'In a trie (prefix tree) storing strings, what is the time complexity of searching for a key of length L, and how does it relate to the number of stored keys n?',
    correct: 'O(L), independent of how many keys n are stored',
    wrong: [
      miss('O(log n), like a balanced binary search tree of strings', 'A trie search follows one character at a time and does not perform key comparisons that depend on n; its cost is the key length L.', 'Count edges followed per character, not comparisons against other keys.'),
      miss('O(n * L), because every stored key must be checked', 'A trie navigates directly down the path for the query key; it never scans all n keys.', 'You descend a single path, not the whole set of keys.'),
      miss('O(L log A) where the log A factor is always unavoidable', 'A log over the alphabet size A appears only if children are stored in a sorted/balanced map; with array-indexed children each step is O(1), giving O(L).', 'With direct array indexing per node, each character step is constant.'),
    ],
    lesson: 'A trie locates a key by walking one node per character, so lookup is O(L) in the key length and does not depend on the number of stored keys n. This contrasts with a balanced BST of strings, where O(log n) comparisons each cost up to O(L). The trade-off is that tries can use substantial memory, especially with large alphabets.',
    source,
    generated: true,
  },
])
