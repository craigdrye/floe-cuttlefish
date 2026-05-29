/**
 * Adult IQ Test — track id, question type, and the 150-item bank.
 *
 * Items span six categories (fluid + crystallised reasoning):
 *   number-series, pattern, verbal, logic, spatial, vocab.
 *
 * Each item carries a 1-5 difficulty weight used both for scoring and for
 * stratified sampling. The short test draws 30 random items per attempt
 * (so a user can replay and see fresh items); the long test uses all 150.
 *
 * Scoring is a heuristic — IQ ≈ 100 + (raw - midpoint) * (45 / midpoint),
 * clamped to [70, 145], where midpoint = sum-of-weights / 2 for the items
 * actually shown. This means short and long tests share the same band
 * mapping even though their raw totals differ.
 */

export const IQ_TEST_TRACK_ID = 'iqTest'

export function isIqTestTrackId(id: string | null | undefined): id is typeof IQ_TEST_TRACK_ID {
  return id === IQ_TEST_TRACK_ID
}

export type IqCategory = 'number-series' | 'pattern' | 'verbal' | 'logic' | 'spatial' | 'vocab'

export type IqQuestion = {
  id: string
  category: IqCategory
  weight: 1 | 2 | 3 | 4 | 5
  prompt: string
  setup?: string[]
  options: { id: string; label: string }[]
  correctId: string
}

export type IqTestLength = 'short' | 'long'

export const SHORT_TEST_COUNT = 30

// Terse builder: q(id, category, weight, prompt, [4 options], correctIndex, setup?)
function q(
  id: string,
  category: IqCategory,
  weight: 1 | 2 | 3 | 4 | 5,
  prompt: string,
  options: [string, string, string, string],
  correctIndex: 0 | 1 | 2 | 3,
  setupLine?: string,
): IqQuestion {
  return {
    id,
    category,
    weight,
    prompt,
    setup: setupLine ? [setupLine] : undefined,
    options: options.map((label, i) => ({ id: String.fromCharCode(97 + i), label })),
    correctId: String.fromCharCode(97 + correctIndex),
  }
}

export const IQ_QUESTIONS: IqQuestion[] = [
  // ── Number series (26) ────────────────────────────────────────────────
  // ns-01  2,4,8,16,32 → 64  (doubling)
  q('ns-01', 'number-series', 1, 'What number continues the sequence?', ['48', '64', '60', '40'], 1, '2, 4, 8, 16, 32, ?'),
  // ns-02  evens → 20
  q('ns-02', 'number-series', 1, 'What number comes next?', ['18', '19', '20', '22'], 2, '2, 4, 6, 8, 10, 12, 14, 16, 18, ?'),
  // ns-03  +4 → 27
  q('ns-03', 'number-series', 1, 'What number comes next?', ['25', '27', '29', '31'], 1, '3, 7, 11, 15, 19, 23, ?'),
  // ns-04  +10 → 65
  q('ns-04', 'number-series', 1, 'What number completes the sequence?', ['55', '60', '65', '70'], 2, '5, 15, 25, 35, 45, 55, ?'),
  // ns-05  -10 → 50
  q('ns-05', 'number-series', 1, 'What is the next number?', ['46', '48', '50', '52'], 2, '100, 90, 80, 70, 60, ?'),
  // ns-06  Fib → 13
  q('ns-06', 'number-series', 2, 'What number comes next?', ['11', '12', '13', '15'], 2, '1, 1, 2, 3, 5, 8, ?'),
  // ns-07  +4,+8,+4,+8,+4,+8 → 40 (alternating +4/+8)
  q('ns-07', 'number-series', 2, 'What number continues the series?', ['34', '36', '40', '44'], 2, '4, 8, 16, 20, 28, 32, ?'),
  // ns-08  squares → 81
  q('ns-08', 'number-series', 2, 'Find the next number.', ['81', '90', '100', '121'], 0, '1, 4, 9, 16, 25, 36, 49, 64, ?'),
  // ns-09  multiples of 6 → 36
  q('ns-09', 'number-series', 2, 'What number completes the series?', ['30', '36', '40', '42'], 1, '6, 12, 18, 24, 30, ?'),
  // ns-10  ×2 → 112
  q('ns-10', 'number-series', 2, 'What comes next?', ['98', '112', '120', '128'], 1, '7, 14, 28, 56, ?'),
  // ns-11  +3,+5,+7,+9 → 38
  q('ns-11', 'number-series', 3, 'What number completes the series?', ['35', '38', '40', '42'], 1, '3, 6, 11, 18, 27, ?'),
  // ns-12  ×2+1 → 95
  q('ns-12', 'number-series', 3, 'Find the next number.', ['89', '93', '95', '99'], 2, '2, 5, 11, 23, 47, ?'),
  // ns-13  powers of 5 → 625
  q('ns-13', 'number-series', 3, 'What number continues the sequence?', ['125', '500', '625', '750'], 2, '1, 5, 25, 125, ?'),
  // ns-14  Fib (offset) → 13
  q('ns-14', 'number-series', 2, 'What number comes next?', ['10', '11', '13', '15'], 2, '0, 1, 1, 2, 3, 5, 8, ?'),
  // ns-15  ×2 → 48
  q('ns-15', 'number-series', 2, 'Find the next number.', ['36', '40', '48', '54'], 2, '3, 6, 12, 24, ?'),
  // ns-16  squares → 144
  q('ns-16', 'number-series', 3, 'What number completes the series?', ['144', '169', '196', '225'], 0, '1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, ?'),
  // ns-17  +1,+2,+3,+4,+5 → 22
  q('ns-17', 'number-series', 3, 'Find the next number.', ['20', '22', '26', '29'], 1, '1, 2, 4, 7, 11, 16, ?'),
  // ns-18  ×2−1 → 33
  q('ns-18', 'number-series', 4, 'Find the next number.', ['27', '29', '31', '33'], 3, '2, 3, 5, 9, 17, ?'),
  // ns-19  cubes → 729
  q('ns-19', 'number-series', 4, 'What comes next?', ['256', '512', '625', '729'], 3, '1, 8, 27, 64, 125, 216, 343, 512, ?'),
  // ns-20  primes → 37
  q('ns-20', 'number-series', 4, 'What number continues the series?', ['33', '37', '39', '41'], 1, '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, ?'),
  // ns-21  2ⁿ−1 → 63
  q('ns-21', 'number-series', 4, 'What number completes the series?', ['47', '55', '63', '127'], 2, '1, 3, 7, 15, 31, ?'),
  // ns-22  2ⁿ+1 → 129
  q('ns-22', 'number-series', 4, 'Find the next number.', ['97', '113', '129', '141'], 2, '3, 5, 9, 17, 33, 65, ?'),
  // ns-23  factorials → 720
  q('ns-23', 'number-series', 5, 'What comes next?', ['360', '480', '600', '720'], 3, '1, 2, 6, 24, 120, ?'),
  // ns-24  Fib → 89
  q('ns-24', 'number-series', 5, 'Find the next term.', ['89', '95', '101', '107'], 0, '1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ?'),
  // ns-25  +3,+6,+9,+12,+15,+18 → 64
  q('ns-25', 'number-series', 5, 'What number continues the series?', ['58', '60', '63', '64'], 3, '1, 4, 10, 19, 31, 46, ?'),
  // ns-26  Catalan/triangular: 1,3,6,10,15,21 → 28
  q('ns-26', 'number-series', 3, 'What is the next triangular number?', ['25', '27', '28', '30'], 2, '1, 3, 6, 10, 15, 21, ?'),

  // ── Pattern recognition (24) ──────────────────────────────────────────
  // pat-01  A,B,C,D,E → F
  q('pat-01', 'pattern', 1, 'Which letter continues the pattern?', ['F', 'G', 'H', 'I'], 0, 'A, B, C, D, E, ?'),
  // pat-02  odd letters → S
  q('pat-02', 'pattern', 1, 'What letter comes next?', ['R', 'S', 'T', 'U'], 1, 'A, C, E, G, I, K, M, O, Q, ?'),
  // pat-03  pairs of consecutive letters → MN
  q('pat-03', 'pattern', 1, 'What comes next?', ['MN', 'NO', 'OP', 'PQ'], 0, 'AB, CD, EF, GH, IJ, KL, ?'),
  // pat-04  +1,+2,+3,+4,+5 → U  (A→C is +2, C→F is +3, F→J is +4, J→O is +5, O→? is +6 → U)
  q('pat-04', 'pattern', 2, 'Which letter continues the pattern?', ['T', 'U', 'V', 'S'], 1, 'A, C, F, J, O, ?'),
  // pat-05  pairs converge → EV
  q('pat-05', 'pattern', 2, 'Which pair continues the series?', ['EV', 'FU', 'EU', 'FV'], 0, 'AZ, BY, CX, DW, ?'),
  // pat-06  odd-one-out (DFHK breaks even-step rule)
  q('pat-06', 'pattern', 2, 'Find the odd one out.', ['ACEG', 'BDFH', 'CEGI', 'DFHK'], 3, 'Three follow a consistent step rule, one breaks it.'),
  // pat-07  pairs slide back → WV
  q('pat-07', 'pattern', 2, 'What comes next?', ['WV', 'VU', 'XW', 'YX'], 0, 'ZY, YX, XW, ?'),
  // pat-08  PQRT breaks alphabet rule
  q('pat-08', 'pattern', 3, 'Find the odd one out.', ['BCDE', 'JKLM', 'PQRT', 'WXYZ'], 2),
  // pat-09  78897 — not a palindrome
  q('pat-09', 'pattern', 3, 'Pick the odd one out.', ['12321', '34543', '56765', '78897'], 3, 'Each option is a 5-digit number — three are palindromes, one is not.'),
  // pat-10  +1,+2,+3,+4,+5 from B starting AB → AQ
  q('pat-10', 'pattern', 4, 'What pair continues the series?', ['AP', 'AQ', 'AR', 'AS'], 1, 'AB, AC, AE, AH, AL, ?'),
  // pat-11  Carrot is the vegetable
  q('pat-11', 'pattern', 2, 'Find the odd one out.', ['Apple', 'Banana', 'Carrot', 'Cherry'], 2, 'Three are fruits, one is a vegetable.'),
  // pat-12  Sphere is 3D
  q('pat-12', 'pattern', 2, 'Find the odd one out.', ['Triangle', 'Square', 'Hexagon', 'Sphere'], 3),
  // pat-13  Flute is woodwind
  q('pat-13', 'pattern', 3, 'Find the odd one out.', ['Violin', 'Cello', 'Flute', 'Viola'], 2, 'Three are string instruments.'),
  // pat-14  Moon orbits Earth
  q('pat-14', 'pattern', 3, 'Pick the odd one out.', ['Mercury', 'Venus', 'Earth', 'Moon'], 3, 'Three are planets.'),
  // pat-15  Square is 2D
  q('pat-15', 'pattern', 2, 'Find the odd one out.', ['Cube', 'Pyramid', 'Cylinder', 'Square'], 3, 'Three are 3D solids.'),
  // pat-16  Shark is a fish
  q('pat-16', 'pattern', 3, 'Pick the odd one out.', ['Whale', 'Dolphin', 'Shark', 'Seal'], 2, 'Three are mammals, one is a fish.'),
  // pat-17  doubling → 128
  q('pat-17', 'pattern', 2, 'What completes the pattern?', ['100', '120', '128', '144'], 2, '2, 4, 8, 16, 32, 64, ?'),
  // pat-18  OWL is a bird
  q('pat-18', 'pattern', 2, 'Which is the odd one out?', ['CAT', 'DOG', 'OWL', 'RAT'], 2, 'Three are mammals, one is a bird.'),
  // pat-19  Bronze is an alloy
  q('pat-19', 'pattern', 3, 'Find the odd one out.', ['Iron', 'Gold', 'Bronze', 'Silver'], 2, 'Three are pure elements, one is an alloy.'),
  // pat-20  Devious — opposite of others
  q('pat-20', 'pattern', 2, 'Pick the odd one out.', ['Honest', 'Truthful', 'Sincere', 'Devious'], 3, 'Three are synonyms.'),
  // pat-21  Potato is a tuber
  q('pat-21', 'pattern', 4, 'Find the odd one out.', ['Tomato', 'Cucumber', 'Pepper', 'Potato'], 3, 'Three are botanically fruits, one is a tuber.'),
  // pat-22  Eagle can fly
  q('pat-22', 'pattern', 3, 'Pick the odd one out.', ['Penguin', 'Ostrich', 'Eagle', 'Kiwi'], 2, 'Three are flightless birds.'),
  // pat-23  Wolf is canine
  q('pat-23', 'pattern', 3, 'Find the odd one out.', ['Tiger', 'Leopard', 'Wolf', 'Jaguar'], 2, 'Three are big cats.'),
  // pat-24  Dolphin is a mammal
  q('pat-24', 'pattern', 3, 'Find the odd one out.', ['Cod', 'Salmon', 'Trout', 'Dolphin'], 3, 'Three are fish.'),

  // ── Verbal analogies & relationships (30) ─────────────────────────────
  q('verb-01', 'verbal', 1, 'Complete the analogy: Hand is to Glove as Foot is to ___.', ['Sock', 'Shoe', 'Toe', 'Leg'], 1),
  q('verb-02', 'verbal', 1, 'Complete the analogy: Bird is to Sky as Fish is to ___.', ['Water', 'Tree', 'Land', 'Air'], 0),
  q('verb-03', 'verbal', 1, 'Complete the analogy: Day is to Night as Light is to ___.', ['Sun', 'Dark', 'Shadow', 'Lamp'], 1),
  q('verb-04', 'verbal', 1, 'Complete the analogy: Hot is to Cold as Up is to ___.', ['Out', 'Down', 'High', 'Left'], 1),
  q('verb-05', 'verbal', 1, 'Complete the analogy: Cat is to Kitten as Dog is to ___.', ['Cub', 'Foal', 'Puppy', 'Calf'], 2),
  q('verb-06', 'verbal', 2, 'Complete the analogy: Pen is to Writer as Brush is to ___.', ['Stroke', 'Painter', 'Canvas', 'Paint'], 1),
  q('verb-07', 'verbal', 2, 'Complete the analogy: Doctor is to Hospital as Teacher is to ___.', ['Book', 'Student', 'School', 'Class'], 2),
  q('verb-08', 'verbal', 2, 'Complete the analogy: Author is to Book as Composer is to ___.', ['Concert', 'Audience', 'Symphony', 'Conductor'], 2),
  q('verb-09', 'verbal', 2, 'Complete the analogy: Bee is to Honey as Cow is to ___.', ['Grass', 'Milk', 'Calf', 'Barn'], 1),
  q('verb-10', 'verbal', 3, 'Complete the analogy: Sword is to Sheath as Bullet is to ___.', ['Gun', 'Cartridge', 'Target', 'Barrel'], 1),
  q('verb-11', 'verbal', 2, 'Complete the analogy: Library is to Books as Gallery is to ___.', ['Art', 'Walls', 'Visitors', 'Building'], 0),
  q('verb-12', 'verbal', 2, 'Complete the analogy: Petal is to Flower as Feather is to ___.', ['Bird', 'Pen', 'Pillow', 'Wing'], 0),
  q('verb-13', 'verbal', 3, 'Pick the word that does NOT belong with the others.', ['Sapphire', 'Emerald', 'Topaz', 'Granite'], 3),
  q('verb-14', 'verbal', 3, 'Pick the odd word out.', ['Hammer', 'Saw', 'Screwdriver', 'Nail'], 3, 'Three are tools, one is a fastener.'),
  q('verb-15', 'verbal', 3, 'Complete the analogy: Calf is to Cow as Foal is to ___.', ['Sheep', 'Horse', 'Goat', 'Donkey'], 1),
  q('verb-16', 'verbal', 3, 'Complete the analogy: Knife is to Cut as Pen is to ___.', ['Ink', 'Write', 'Page', 'Word'], 1),
  q('verb-17', 'verbal', 3, 'Pick the odd word.', ['Lion', 'Tiger', 'Panda', 'Leopard'], 2, 'Three are big cats.'),
  q('verb-18', 'verbal', 3, 'Complete the analogy: Clock is to Time as Thermometer is to ___.', ['Mercury', 'Glass', 'Temperature', 'Doctor'], 2),
  q('verb-19', 'verbal', 3, 'Complete the analogy: Gold is to Mine as Pearl is to ___.', ['Necklace', 'Sea', 'Oyster', 'Diver'], 2),
  q('verb-20', 'verbal', 3, 'Complete the analogy: Architect is to Building as Composer is to ___.', ['Song', 'Music', 'Score', 'Sound'], 2),
  q('verb-21', 'verbal', 3, 'Pick the odd word.', ['Run', 'Sprint', 'Dash', 'Crawl'], 3, 'Three imply fast movement.'),
  q('verb-22', 'verbal', 4, 'Complete the analogy: Captain is to Ship as Pilot is to ___.', ['Sky', 'Cockpit', 'Aircraft', 'Crew'], 2),
  q('verb-23', 'verbal', 4, 'Complete the analogy: Symphony is to Movement as Book is to ___.', ['Chapter', 'Author', 'Library', 'Page'], 0),
  q('verb-24', 'verbal', 4, 'Pick the odd word.', ['Justice', 'Mercy', 'Crime', 'Honour'], 2, 'Three are virtues.'),
  q('verb-25', 'verbal', 4, 'Complete the analogy: Pebble is to Boulder as Pond is to ___.', ['Stream', 'Lake', 'River', 'Ocean'], 3),
  q('verb-26', 'verbal', 4, 'Complete the analogy: Ignorance is to Knowledge as Poverty is to ___.', ['Wealth', 'Money', 'Charity', 'Income'], 0),
  q('verb-27', 'verbal', 4, 'Complete the analogy: Brick is to Wall as Cell is to ___.', ['Skin', 'Membrane', 'Organism', 'Nucleus'], 2),
  q('verb-28', 'verbal', 5, 'Complete the analogy: Whisper is to Shout as Glimpse is to ___.', ['Look', 'Gaze', 'Stare', 'Sight'], 2),
  q('verb-29', 'verbal', 5, 'Complete the analogy: Coward is to Brave as Pauper is to ___.', ['Lord', 'Wealthy', 'Generous', 'Proud'], 1),
  q('verb-30', 'verbal', 4, 'Complete the analogy: Cygnet is to Swan as Joey is to ___.', ['Rabbit', 'Kangaroo', 'Owl', 'Deer'], 1),

  // ── Logic (30) ─────────────────────────────────────────────────────────
  q('log-01', 'logic', 1, 'If today is Wednesday, what day was it three days ago?', ['Saturday', 'Sunday', 'Monday', 'Tuesday'], 1),
  q('log-02', 'logic', 1, 'All apples are fruit. This is an apple. Therefore:', ['It might be a fruit', 'It is a fruit', 'It is not a fruit', 'Cannot be determined'], 1),
  q('log-03', 'logic', 1, 'If Sam is older than Alex and Alex is older than Pat, who is youngest?', ['Sam', 'Alex', 'Pat', 'Cannot tell'], 2),
  q('log-04', 'logic', 1, 'You have 3 apples and give 1 away. How many do you have left?', ['0', '1', '2', '3'], 2),
  q('log-05', 'logic', 2, 'A sister is twice as old as her brother. In six years she will be 14. How old is her brother now?', ['4', '6', '7', '8'], 0),
  q('log-06', 'logic', 2, 'If Anna is taller than Brett, and Brett is taller than Chen, who is shortest?', ['Anna', 'Brett', 'Chen', 'Cannot be determined'], 2),
  q('log-07', 'logic', 3, 'All roses are flowers. Some flowers fade quickly. Therefore:', ['All roses fade quickly.', 'Some roses fade quickly.', 'No roses fade quickly.', 'None of the above must be true.'], 3),
  q('log-08', 'logic', 1, 'You start at noon and walk for 1.5 hours. What time is it?', ['1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM'], 1),
  q('log-09', 'logic', 2, 'If A > B and C < B, what must be true?', ['A > C', 'A < C', 'A = C', 'Cannot tell'], 0),
  q('log-10', 'logic', 2, 'Half of 80 plus a quarter of 40 equals what?', ['40', '45', '50', '60'], 2),
  q('log-11', 'logic', 4, 'A clock shows 3:15. The hour hand is slightly past 3. What is the smaller angle between the hour and minute hands?', ['0°', '7.5°', '15°', '22.5°'], 1, 'At 3:00 the hour hand is at 3. By 3:15 it has moved 7.5° past 3, and the minute hand is exactly at 3.'),
  q('log-12', 'logic', 4, 'Five friends sit in a row. Mei is to the left of Raj. Sara is to the right of Raj but to the left of Tom. Lee is at one of the ends, farthest from Tom. Who sits in the middle?', ['Mei', 'Raj', 'Sara', 'Tom'], 1),
  q('log-13', 'logic', 2, 'If all Bloops are Razzies and all Razzies are Lazzies, then:', ['All Bloops are Lazzies', 'All Lazzies are Bloops', 'No Lazzies are Bloops', 'Some Lazzies are not Razzies'], 0),
  q('log-14', 'logic', 4, 'A train leaves at 9 AM at 60 mph. Another leaves the same station an hour later at 90 mph. When does the second catch up?', ['11 AM', '11:30 AM', '12 PM', '1 PM'], 2, 'Distance equation: 60·t = 90·(t − 1).'),
  q('log-15', 'logic', 3, 'If 5 machines make 5 widgets in 5 minutes, how long do 100 machines take to make 100 widgets?', ['5 minutes', '20 minutes', '100 minutes', '500 minutes'], 0),
  q('log-16', 'logic', 3, 'A lily-pad patch doubles every day. If it covers the pond on day 48, on which day did it cover half?', ['Day 24', 'Day 25', 'Day 47', 'Day 46'], 2),
  q('log-17', 'logic', 2, 'You roll two fair dice. What is the most likely sum?', ['6', '7', '8', '9'], 1),
  q('log-18', 'logic', 4, 'A box contains 3 red and 2 blue balls. You draw 2 without replacement. P(both red)?', ['1/5', '3/10', '3/5', '6/25'], 1, 'P = (3/5) × (2/4).'),
  q('log-19', 'logic', 3, 'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?', ['$0.10', '$0.05', '$0.15', '$0.20'], 1),
  q('log-20', 'logic', 2, '4 men dig 4 holes in 4 hours. How long does 1 man take to dig 1 hole?', ['1 hour', '2 hours', '4 hours', '16 hours'], 2),
  q('log-21', 'logic', 4, 'A snail climbs a 10-meter pole, going up 3m by day and slipping 2m by night. How many days to reach the top?', ['7 days', '8 days', '9 days', '10 days'], 1, 'After day 7 it is at 7m; on day 8 it climbs to 10m and reaches the top.'),
  q('log-22', 'logic', 2, 'If P implies Q and Q is false, what can we conclude?', ['P is true', 'P is false', 'P is unknown', 'Q is true'], 1),
  q('log-23', 'logic', 5, 'Three switches outside a room control three bulbs inside. You can flip switches but enter only once. How do you identify each bulb?', ['Turn 1 on for 5 min, off; turn 2 on; enter — lit = 2, warm-off = 1, cool-off = 3', 'Flip all on, enter — observe brightness', 'Flip them randomly, take notes', 'It is impossible without a window'], 0, 'Use heat as the second signal.'),
  q('log-24', 'logic', 5, 'A monkey climbs 3m up a 30m pole then slips 2m each rest. How many "climb-rest" cycles to first reach the top?', ['27', '28', '29', '30'], 1, 'After 27 cycles it is at 27m; on the 28th climb it reaches 30m and does not slip.'),
  q('log-25', 'logic', 3, 'If "Some A are B" is true, which must also be true?', ['Some B are A', 'All A are B', 'No A are B', 'All B are A'], 0),
  q('log-26', 'logic', 5, 'You have 9 coins; one is heavier. With a balance scale, what is the minimum number of weighings to guarantee finding it?', ['1', '2', '3', '4'], 1),
  q('log-27', 'logic', 5, 'In a room of 23 people, the probability that at least two share a birthday is closest to:', ['About 6%', 'About 23%', 'About 50%', 'About 90%'], 2),
  q('log-28', 'logic', 3, 'A drawer has 10 black socks and 10 white socks. How many socks must you take in the dark to guarantee a matching pair?', ['2', '3', '11', '20'], 1),
  q('log-29', 'logic', 2, 'What is the fewest US coins needed to make exactly $0.30?', ['3', '2', '4', '6'], 1, 'A quarter plus a nickel.'),
  q('log-30', 'logic', 4, 'A father is four times his son\'s age. In 20 years he will be twice as old. How old is the father now?', ['30', '40', '50', '60'], 1, '4s + 20 = 2(s + 20) → s = 10.'),

  // ── Spatial reasoning (15) ────────────────────────────────────────────
  q('spa-01', 'spatial', 1, 'How many edges does a cube have?', ['6', '8', '12', '24'], 2),
  q('spa-02', 'spatial', 2, 'How many faces does a triangular prism have?', ['3', '4', '5', '6'], 2),
  q('spa-03', 'spatial', 1, 'If you fold a square in half diagonally, what shape do you get?', ['Triangle', 'Trapezoid', 'Pentagon', 'Smaller square'], 0),
  q('spa-04', 'spatial', 4, 'A cube is painted on all six faces and then cut into 27 equal small cubes. How many small cubes have exactly two painted faces?', ['8', '12', '6', '1'], 1, 'They sit on edges, not corners or interior.'),
  q('spa-05', 'spatial', 4, 'How many small cubes in the 27-cube above have NO paint?', ['0', '1', '4', '6'], 1, 'Only the very centre.'),
  q('spa-06', 'spatial', 2, 'Rotating a square 90° about its center produces what?', ['A circle', 'The same square', 'A diamond', 'A rectangle'], 1, 'Visually indistinguishable from the original.'),
  q('spa-07', 'spatial', 4, 'On a standard die, 1 is opposite 6, 2 opposite 5, and 3 opposite 4. Which face is opposite 3?', ['1', '2', '4', '6'], 2),
  q('spa-08', 'spatial', 3, 'A cylinder has radius 3 and height 5. Its volume (in cubic units) is closest to:', ['141', '47', '90', '60'], 0, 'V = π·r²·h ≈ 3.14·9·5.'),
  q('spa-09', 'spatial', 5, 'A 4×4×4 cube is painted and cut into 1cm³ cubes. How many small cubes have at least one painted face?', ['24', '40', '56', '64'], 2, '64 − interior 2³ = 64 − 8.'),
  q('spa-10', 'spatial', 3, 'A clock\'s minute hand points at 12 and the hour hand at 4. What is the angle between them?', ['90°', '100°', '120°', '150°'], 2, '4 × 30°.'),
  q('spa-11', 'spatial', 2, 'A sphere fits exactly inside a cube of side 6. What is the sphere\'s diameter?', ['3', '6', '9', '12'], 1),
  q('spa-12', 'spatial', 5, 'How many unit cubes are in a 4×4×4 arrangement with the centre 2×2×2 hollowed out?', ['48', '56', '60', '62'], 1, '64 − 8.'),
  q('spa-13', 'spatial', 3, 'Folding a cross-shaped net of six squares forms what?', ['Cylinder', 'Cube', 'Cone', 'Pyramid'], 1),
  q('spa-14', 'spatial', 3, 'A regular tetrahedron has how many vertices?', ['3', '4', '5', '6'], 1),
  q('spa-15', 'spatial', 4, 'A rectangular box is 2 × 3 × 6. Its surface area is:', ['36', '54', '72', '108'], 2, '2·(2·3 + 3·6 + 2·6) = 2·36.'),

  // ── Vocabulary (25) ───────────────────────────────────────────────────
  q('vocab-01', 'vocab', 1, 'Which word means most nearly the OPPOSITE of "happy"?', ['Glad', 'Sad', 'Calm', 'Excited'], 1),
  q('vocab-02', 'vocab', 1, 'Which word means most nearly the SAME as "big"?', ['Tiny', 'Huge', 'Cold', 'Quick'], 1),
  q('vocab-03', 'vocab', 1, 'Which word means most nearly the SAME as "begin"?', ['End', 'Start', 'Pause', 'Stop'], 1),
  q('vocab-04', 'vocab', 1, 'Which word means most nearly the OPPOSITE of "fast"?', ['Quick', 'Rapid', 'Slow', 'Speedy'], 2),
  q('vocab-05', 'vocab', 2, 'Which word means most nearly the OPPOSITE of "abundant"?', ['Plentiful', 'Scarce', 'Numerous', 'Ample'], 1),
  q('vocab-06', 'vocab', 2, 'Which word means most nearly the SAME as "swift"?', ['Slow', 'Quick', 'Tall', 'Heavy'], 1),
  q('vocab-07', 'vocab', 2, 'Which word means most nearly the SAME as "ancient"?', ['Modern', 'Recent', 'Old', 'New'], 2),
  q('vocab-08', 'vocab', 2, 'Which word means most nearly the OPPOSITE of "transparent"?', ['Clear', 'Opaque', 'Visible', 'Glass'], 1),
  q('vocab-09', 'vocab', 2, 'Which word means most nearly the SAME as "courage"?', ['Fear', 'Bravery', 'Cowardice', 'Doubt'], 1),
  q('vocab-10', 'vocab', 3, 'Which word is closest in meaning to "ephemeral"?', ['Long-lasting', 'Spiritual', 'Short-lived', 'Imaginary'], 2),
  q('vocab-11', 'vocab', 3, 'Which word means most nearly the SAME as "lucid"?', ['Confused', 'Clear', 'Dim', 'Hidden'], 1),
  q('vocab-12', 'vocab', 3, 'Which word means most nearly the OPPOSITE of "benevolent"?', ['Kind', 'Cruel', 'Generous', 'Gentle'], 1),
  q('vocab-13', 'vocab', 3, 'Which word means most nearly the SAME as "candid"?', ['Hidden', 'Frank', 'Polite', 'Secret'], 1),
  q('vocab-14', 'vocab', 3, 'Which word means most nearly the OPPOSITE of "frugal"?', ['Thrifty', 'Wasteful', 'Saving', 'Careful'], 1),
  q('vocab-15', 'vocab', 2, 'Which word is closest in meaning to "verify"?', ['Question', 'Confirm', 'Deny', 'Hide'], 1),
  q('vocab-16', 'vocab', 3, 'Which word means most nearly the SAME as "ambiguous"?', ['Certain', 'Unclear', 'Bright', 'Strong'], 1),
  q('vocab-17', 'vocab', 4, 'Which word means most nearly the SAME as "obfuscate"?', ['Clarify', 'Confuse', 'Argue', 'Reflect'], 1),
  q('vocab-18', 'vocab', 4, 'Which word means most nearly the OPPOSITE of "verbose"?', ['Wordy', 'Concise', 'Loud', 'Quiet'], 1),
  q('vocab-19', 'vocab', 4, 'Which word means most nearly the SAME as "pragmatic"?', ['Idealistic', 'Practical', 'Theoretical', 'Romantic'], 1),
  q('vocab-20', 'vocab', 4, 'Which word means most nearly the SAME as "lethargic"?', ['Sluggish', 'Energetic', 'Alert', 'Focused'], 0),
  q('vocab-21', 'vocab', 4, 'Which word means most nearly the OPPOSITE of "ostentatious"?', ['Showy', 'Modest', 'Bright', 'Wealthy'], 1),
  q('vocab-22', 'vocab', 5, 'Which word means most nearly the SAME as "perfidious"?', ['Loyal', 'Treacherous', 'Honest', 'Generous'], 1),
  q('vocab-23', 'vocab', 5, 'Which word means most nearly the OPPOSITE of "sycophantic"?', ['Flattering', 'Critical', 'Submissive', 'Obedient'], 1),
  q('vocab-24', 'vocab', 5, 'Which word means most nearly the SAME as "ineffable"?', ['Expressible', 'Indescribable', 'Loud', 'Stubborn'], 1),
  q('vocab-25', 'vocab', 5, 'Which word means most nearly the SAME as "perspicacious"?', ['Blind', 'Insightful', 'Hesitant', 'Wealthy'], 1),
]

if (IQ_QUESTIONS.length !== 150) {
  throw new Error(`IQ_QUESTIONS expected length 150, got ${IQ_QUESTIONS.length}`)
}

/**
 * Pick `count` random items from the bank, stratified across categories
 * so a short test stays representative. Items inside each stratum are
 * sampled uniformly without replacement. Each call returns a fresh draw.
 */
export function sampleIqQuestions(count: number): IqQuestion[] {
  if (count >= IQ_QUESTIONS.length) return shuffle(IQ_QUESTIONS)

  const byCategory: Record<IqCategory, IqQuestion[]> = {
    'number-series': [],
    pattern: [],
    verbal: [],
    logic: [],
    spatial: [],
    vocab: [],
  }
  for (const item of IQ_QUESTIONS) byCategory[item.category].push(item)

  const totalPool = IQ_QUESTIONS.length
  const targets: Array<{ cat: IqCategory; want: number }> = []
  let allocated = 0
  ;(Object.keys(byCategory) as IqCategory[]).forEach((cat) => {
    const share = Math.round((byCategory[cat].length / totalPool) * count)
    targets.push({ cat, want: share })
    allocated += share
  })

  // Reconcile rounding so we hit exactly `count`.
  let drift = count - allocated
  let i = 0
  while (drift !== 0 && i < 1000) {
    const target = targets[i % targets.length]
    if (drift > 0 && target.want < byCategory[target.cat].length) {
      target.want += 1
      drift -= 1
    } else if (drift < 0 && target.want > 0) {
      target.want -= 1
      drift += 1
    }
    i += 1
  }

  const picked: IqQuestion[] = []
  for (const { cat, want } of targets) {
    picked.push(...shuffle(byCategory[cat]).slice(0, want))
  }
  return shuffle(picked)
}

function shuffle<T>(arr: readonly T[]): T[] {
  const out = arr.slice()
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/**
 * Map a weighted raw score against the maximum possible score for the items
 * shown. Centered so a "typical" response (~half weighted points) lands
 * near IQ 100; clamped to [70, 145]. Short and long tests share this
 * mapping even though their raw totals differ.
 */
export function estimateIQ(rawScore: number, maxScore: number): number {
  if (maxScore <= 0) return 100
  const midpoint = maxScore / 2
  const scale = 45 / midpoint
  const raw = 100 + (rawScore - midpoint) * scale
  return Math.round(Math.max(70, Math.min(145, raw)))
}

export function bandForIq(iq: number): { label: string; copy: string } {
  if (iq >= 140) return {
    label: 'Highly gifted range',
    copy: 'A very strong showing across pattern, verbal, and logic items. The estimate widens above this range — a supervised test is the only way to pin it down.',
  }
  if (iq >= 130) return {
    label: 'Gifted range',
    copy: 'Strong fluid and crystallized reasoning. You held up across the trickiest items.',
  }
  if (iq >= 120) return {
    label: 'Superior range',
    copy: 'Above-average across the board. Most adults score in a band below this.',
  }
  if (iq >= 110) return {
    label: 'High average range',
    copy: 'Above the typical adult mean. Solid pattern recognition and verbal reasoning.',
  }
  if (iq >= 90) return {
    label: 'Average range',
    copy: 'Right around the typical adult range. Mistakes on harder items are normal.',
  }
  if (iq >= 80) return {
    label: 'Low average range',
    copy: 'Below the typical adult mean. A clean retake on a different day often shifts this band.',
  }
  return {
    label: 'Below average range',
    copy: 'This is a short estimate, not a clinical assessment. Mood, sleep, and time pressure shift this number meaningfully.',
  }
}

export function categoryLabel(category: IqCategory): string {
  switch (category) {
    case 'number-series': return 'Number series'
    case 'pattern': return 'Pattern recognition'
    case 'verbal': return 'Verbal reasoning'
    case 'logic': return 'Logic'
    case 'spatial': return 'Spatial reasoning'
    case 'vocab': return 'Vocabulary'
  }
}
