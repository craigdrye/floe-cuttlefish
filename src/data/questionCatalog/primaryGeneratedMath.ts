import { makeQuestionBank } from './base'
import type { Question } from './types'

type QuestionDefinition = Parameters<typeof makeQuestionBank>[1][number]
type WrongAnswer = [string, string, string]

const mathTopic = 'Mathematics'

function numericWrong(correct: number, candidates: number[], suffix = ''): WrongAnswer[] {
  const values: number[] = []
  for (const candidate of candidates) {
    if (candidate !== correct && !values.includes(candidate)) {
      values.push(candidate)
    }
  }

  let offset = 1
  while (values.length < 3) {
    const next = correct + offset
    if (next !== correct && !values.includes(next)) {
      values.push(next)
    }
    offset += 1
  }

  return values.slice(0, 3).map((value) => [
    `${value}${suffix}`,
    'This comes from a nearby arithmetic or counting slip.',
    'Check the operation and recompute the exact value asked for.',
  ])
}

function textWrong(entries: Array<[string, string, string]>): WrongAnswer[] {
  return entries
}

function mentorHintForGeneratedMath(chapter: string, title: string, prompt: string): string {
  const topic = `${chapter} ${title} ${prompt}`.toLowerCase()

  if (topic.includes('addition') || topic.includes('sum') || topic.includes('double')) {
    return 'Think of the numbers as parts being joined. Count on from the larger number, or break one addend into friendly pieces before checking the answer.'
  }
  if (topic.includes('subtraction') || topic.includes('one less') || topic.includes('less than')) {
    return 'Subtraction asks what is left or how far apart two numbers are. Count back carefully, and make sure you are taking away the right amount.'
  }
  if (topic.includes('multiplication') || topic.includes('times table') || topic.includes('equal groups')) {
    return 'Multiplication means equal groups, so picture the number of groups and the size of each group. A skip-count or repeated-addition check can catch most near misses.'
  }
  if (topic.includes('division') || topic.includes('shared equally') || topic.includes('divided')) {
    return 'Division asks for an equal share or for how many groups fit. Use the related multiplication fact to check whether your quotient recreates the original total.'
  }
  if (topic.includes('fraction')) {
    return 'Name the whole first, then compare the numerator and denominator. For equivalent or ordered fractions, use equal parts, common denominators, or a benchmark like one half.'
  }
  if (topic.includes('decimal')) {
    return 'Line up place values before comparing or calculating with decimals. Tenths, hundredths, and thousandths behave like smaller place-value columns, so zeros can matter.'
  }
  if (topic.includes('percent')) {
    return 'Translate the percent into a fraction, decimal, or familiar benchmark such as 10%. Then decide whether the question asks for the percent amount or the final total.'
  }
  if (topic.includes('pattern')) {
    return 'Find the repeating unit or the constant step before choosing the next item. Test your rule on every shown term, not just the last two.'
  }
  if (topic.includes('place value') || topic.includes('expanded')) {
    return 'Read each digit by its place: ones, tens, hundreds, and beyond. Expanded form keeps only the value each digit contributes, while zeros hold places.'
  }
  if (topic.includes('coordinate') || topic.includes('quadrant')) {
    return 'Use the ordered pair as x first, y second. The signs tell the quadrant, and distances along a horizontal or vertical side come from subtracting matching coordinates.'
  }
  if (topic.includes('area') || topic.includes('perimeter') || topic.includes('volume') || topic.includes('surface area') || topic.includes('geometry')) {
    return 'First decide what kind of measure is being asked for: around, covering, or filling. Then choose the matching formula and check whether the units should be plain, squared, or cubed.'
  }
  if (topic.includes('data') || topic.includes('mode') || topic.includes('median') || topic.includes('histogram')) {
    return 'Identify the data word before calculating. Mean, median, mode, range, and histograms each ask for a different view of the same set of values.'
  }
  if (topic.includes('inequality') || topic.includes('equation') || topic.includes('solve')) {
    return 'Treat the equation or inequality like a balance and undo operations in reverse order. For inequalities, remember that multiplying or dividing by a negative flips the symbol.'
  }
  if (topic.includes('shape') || topic.includes('angle')) {
    return 'Match the shape or angle to its definition before looking at the choices. Count sides, corners, or degrees rather than relying on how the diagram feels.'
  }

  return 'Point to the exact clue in the question, then choose the operation or definition that matches it. Most wrong answers are one small counting, place-value, or wording slip away from the right idea.'
}

function define(
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: WrongAnswer[],
  lesson: string,
): QuestionDefinition {
  const seen = new Set([correct])
  const cleanedWrong: WrongAnswer[] = []
  const fallbacks: WrongAnswer[] = [
    ['A nearby value', 'This is a plausible distractor, but it does not match the exact question.', 'Use the clue or operation in the prompt, then check the result.'],
    ['The reversed order', 'This reverses a relationship or reads the parts in the wrong order.', 'Keep quantities and coordinates in the order given.'],
    ['Not enough information', 'The question gives enough information to solve it.', 'Use the stated numbers, shape facts, or unit facts directly.'],
  ]

  for (const answer of [...wrong, ...fallbacks]) {
    if (!seen.has(answer[0])) {
      cleanedWrong.push(answer)
      seen.add(answer[0])
    }
    if (cleanedWrong.length === 3) {
      break
    }
  }

  return { id, chapter, title, prompt, correct, wrong: cleanedWrong, lesson, mentorHint: mentorHintForGeneratedMath(chapter, title, prompt) }
}

function bank(baseId: number, builders: Array<(id: number) => QuestionDefinition>): Question[] {
  return makeQuestionBank(
    mathTopic,
    builders.slice(0, 50).map((build, index) => build(baseId + index)),
  )
}

function addition(pairs: Array<[number, number]>, chapter: string, limitNote: string) {
  return pairs.map(([a, b]) => (id: number) =>
    define(
      id,
      chapter,
      'Addition fact',
      `What is ${a} + ${b}?`,
      `${a + b}`,
      numericWrong(a + b, [a + b + 1, a + b - 1, Math.abs(a - b)]),
      `Add the two parts: ${a} + ${b} = ${a + b}. ${limitNote}`,
    ),
  )
}

function subtraction(pairs: Array<[number, number]>, chapter: string, limitNote: string) {
  return pairs.map(([a, b]) => (id: number) =>
    define(
      id,
      chapter,
      'Subtraction fact',
      `What is ${a} - ${b}?`,
      `${a - b}`,
      numericWrong(a - b, [a - b + 1, a - b - 1, a + b]),
      `Subtract the part taken away: ${a} - ${b} = ${a - b}. ${limitNote}`,
    ),
  )
}

function multiplication(facts: Array<[number, number]>, chapter = 'Multiplication facts') {
  return facts.map(([a, b]) => (id: number) =>
    define(
      id,
      chapter,
      'Times table fact',
      `What is ${a} x ${b}?`,
      `${a * b}`,
      numericWrong(a * b, [a * b + a, a * b - a, a + b]),
      `Multiplication counts equal groups: ${a} groups of ${b} make ${a * b}.`,
    ),
  )
}

function division(facts: Array<[number, number]>, chapter = 'Division facts') {
  return facts.map(([groups, each]) => {
    const total = groups * each
    return (id: number) =>
      define(
        id,
        chapter,
        'Equal sharing',
        `${total} objects are shared equally into ${groups} groups. How many are in each group?`,
        `${each}`,
        numericWrong(each, [groups, total - groups, each + 1]),
        `Division finds an equal share: ${total} divided by ${groups} is ${each}.`,
      )
  })
}

function nextNumber(numbers: number[], step: number, chapter: string) {
  const shown = numbers.join(', ')
  const correct = numbers[numbers.length - 1] + step
  return (id: number) =>
    define(
      id,
      chapter,
      'Number pattern',
      `What comes next: ${shown}, ?`,
      `${correct}`,
      numericWrong(correct, [correct + step, correct - 1, correct + 1]),
      `The rule is add ${step} each time, so the next number is ${correct}.`,
    )
}

function fractionQuestion(
  chapter: string,
  prompt: string,
  correct: string,
  wrong: WrongAnswer[],
  lesson: string,
) {
  return (id: number) => define(id, chapter, 'Fractions', prompt, correct, wrong, lesson)
}

function makeEarlyMathReviewBank(baseId: number): Question[] {
  const builders: Array<(id: number) => QuestionDefinition> = [
    ...[3, 6, 9, 12, 15, 18].map((n) => nextNumber([n, n + 1, n + 2], 1, 'Number confidence')),
    ...[
      [[2, 4, 6], 2],
      [[1, 3, 5], 2],
      [[10, 9, 8], -1],
      [[15, 14, 13], -1],
    ].map(([numbers, step]) => nextNumber(numbers as number[], step as number, 'Number confidence')),
    ...[5, 8, 11, 14, 17, 20].map((n) => (id: number) =>
      define(
        id,
        'Number confidence',
        'One less',
        `What is one less than ${n}?`,
        `${n - 1}`,
        numericWrong(n - 1, [n, n + 1, n - 2]),
        `One less means count back one step from ${n} to ${n - 1}.`,
      ),
    ),
    ...addition([[1, 2], [2, 3], [4, 1], [3, 3], [5, 2], [6, 1], [4, 4], [7, 2]], 'Simple operations', 'These sums stay within 10.'),
    ...subtraction([[5, 1], [6, 2], [7, 3], [8, 4], [9, 2], [10, 5], [6, 1], [9, 4]], 'Simple operations', 'These take-away facts stay within 10.'),
    ...[1, 2, 3, 4, 5, 6].map((n) => (id: number) =>
      define(
        id,
        'Simple operations',
        'Double a number',
        `What is double ${n}?`,
        `${n * 2}`,
        numericWrong(n * 2, [n + 2, n * 2 + 1, n]),
        `Double means two equal groups, so double ${n} is ${n} + ${n} = ${n * 2}.`,
      ),
    ),
    ...[
      ['red, blue, red, blue, ?', 'red', 'The pattern repeats red then blue.'],
      ['circle, square, circle, square, ?', 'circle', 'The pattern repeats circle then square.'],
      ['1, 2, 1, 2, ?', '1', 'The pattern repeats 1 then 2.'],
      ['big, small, big, small, ?', 'big', 'The pattern repeats big then small.'],
    ].map(([pattern, correct, lesson]) => (id: number) =>
      define(
        id,
        'Patterns and sorting',
        'Complete the pattern',
        `What comes next: ${pattern}`,
        correct,
        textWrong([
          ['blue', 'That fits only some color patterns, not this exact one.', 'Read the repeating order from the start.'],
          ['square', 'That copies a nearby shape instead of following the next step.', 'Name the repeating unit first.'],
          ['small', 'That swaps the order of the pattern.', 'Keep the same order each time.'],
        ]),
        lesson,
      ),
    ),
    ...[
      ['Which shape has 3 straight sides?', 'triangle', 'A triangle has 3 sides.'],
      ['Which shape is round with no corners?', 'circle', 'A circle is round and has no vertices.'],
      ['Which shape has 4 equal sides?', 'square', 'A square has four equal sides.'],
      ['The toy is under the table. Which word tells its position?', 'under', 'Position words tell where something is.'],
      ['Which object is usually heavier: a book or a feather?', 'book', 'Heavier means it has more weight.'],
      ['Which object is usually taller: a child or a crayon?', 'child', 'Taller means it reaches higher.'],
      ['If a cup has no blocks in it, how many blocks are there?', '0', 'Zero means none.'],
      ['Which word means beside something?', 'next to', 'Next to means beside.'],
    ].map(([prompt, correct, lesson]) => (id: number) =>
      define(
        id,
        'Shape and space basics',
        'Shape and position',
        prompt,
        correct,
        textWrong([
          ['rectangle', 'This is a different shape or position word.', 'Match the clue exactly.'],
          ['next to', 'This position does not match the sentence.', 'Use the word that says where the object is.'],
          ['circle', 'This does not match all the shape clues.', 'Count sides or corners before choosing.'],
        ]),
        lesson,
      ),
    ),
  ]

  return bank(baseId, builders)
}

function makeClass1MathBank(baseId: number): Question[] {
  const builders: Array<(id: number) => QuestionDefinition> = [
    ...[12, 24, 35, 47, 58, 69].map((n) => (id: number) =>
      define(
        id,
        'Counting and place value',
        'One more',
        `What is one more than ${n}?`,
        `${n + 1}`,
        numericWrong(n + 1, [n, n - 1, n + 10]),
        `One more means count forward once, from ${n} to ${n + 1}.`,
      ),
    ),
    ...[14, 28, 33, 45, 51, 70].map((n) => (id: number) =>
      define(
        id,
        'Counting and place value',
        'One less',
        `What is one less than ${n}?`,
        `${n - 1}`,
        numericWrong(n - 1, [n, n + 1, n - 10]),
        `One less means count back once, from ${n} to ${n - 1}.`,
      ),
    ),
    ...[23, 34, 41, 56, 62, 75].map((n) => {
      const tens = Math.floor(n / 10)
      const ones = n % 10
      return (id: number) =>
        define(
          id,
          'Counting and place value',
          'Tens and ones',
          `Which shows ${n} as tens and ones?`,
          `${tens} tens and ${ones} ones`,
          textWrong([
            [`${ones} tens and ${tens} ones`, 'This reverses the tens and ones.', 'Read the left digit as tens and the right digit as ones.'],
            [`${tens} ones and ${ones} tens`, 'This names the places backwards.', 'Tens are groups of ten.'],
            [`${n} tens and 0 ones`, 'This treats the whole number as tens.', 'Split the number by place value.'],
          ]),
          `${n} has ${tens} groups of ten and ${ones} ones.`,
        )
    }),
    ...addition([[7, 2], [8, 5], [9, 4], [6, 6], [10, 7], [11, 5], [12, 6], [13, 4]], 'Addition and subtraction', 'Class 1 addition focuses on totals within 20.'),
    ...subtraction([[10, 3], [12, 5], [14, 6], [15, 7], [16, 8], [18, 9], [19, 6], [20, 4]], 'Addition and subtraction', 'Class 1 subtraction focuses on numbers within 20.'),
    ...[2, 4, 6, 8, 10].map((n) => (id: number) =>
      define(
        id,
        'Geometry and fractions',
        'Find half',
        `What is half of ${n}?`,
        `${n / 2}`,
        numericWrong(n / 2, [n, n / 2 + 1, n - 2]),
        `Half means split into two equal parts, so half of ${n} is ${n / 2}.`,
      ),
    ),
    ...[
      ['What shape has 6 sides?', 'hexagon', 'A hexagon has six sides.'],
      ['Which 3D shape is shaped like a ball?', 'sphere', 'A sphere is round like a ball.'],
      ['Which time means half past 3?', '3:30', 'Half past means 30 minutes after the hour.'],
      ['Which coin total is 10 cents: 5 cents + 5 cents or 1 cent + 1 cent?', '5 cents + 5 cents', 'Two fives make ten.'],
      ['A tally chart has four marks. How many votes is that?', '4', 'Each tally mark counts one item.'],
      ['Which number is greater: 42 or 24?', '42', 'Compare tens first: 4 tens is more than 2 tens.'],
      ['What comes next when counting by 5s: 5, 10, 15, ?', '20', 'Counting by 5s adds 5 each time.'],
      ['What comes next when counting by 2s: 2, 4, 6, ?', '8', 'Counting by 2s adds 2 each time.'],
      ['What comes next when counting by 10s: 10, 20, 30, ?', '40', 'Counting by 10s adds 10 each time.'],
      ['Which shape has 5 sides?', 'pentagon', 'A pentagon has five sides.'],
      ['If 12 = 10 + ?, what number is missing?', '2', '12 is one ten and two ones.'],
    ].map(([prompt, correct, lesson]) => (id: number) =>
      define(
        id,
        prompt.includes('shape') || prompt.includes('sphere') ? 'Geometry and fractions' : 'Measurement, time, and data',
        'Primary math idea',
        prompt,
        correct,
        textWrong([
          ['12', 'This number does not match the clue or count.', 'Use the exact clue in the question.'],
          ['circle', 'This is a familiar shape but not the one described.', 'Match the property to the shape.'],
          ['2:30', 'This is a different clock time.', 'Half past 3 means 30 minutes after 3.'],
        ]),
        lesson,
      ),
    ),
  ]

  return bank(baseId, builders)
}

function makeClass2MathBank(baseId: number): Question[] {
  const builders: Array<(id: number) => QuestionDefinition> = [
    ...[38, 47, 64, 72, 86, 95].map((n) => {
      const tens = Math.floor(n / 10) * 10
      const ones = n % 10
      return (id: number) =>
        define(
          id,
          'Place value and number',
          'Partition a number',
          `Which partition matches ${n}?`,
          `${tens} + ${ones}`,
          textWrong([
            [`${ones} + ${tens / 10}`, 'This mixes up tens and ones.', 'The tens digit represents groups of ten.'],
            [`${tens + 10} + ${ones}`, 'This adds one extra ten.', 'Check the tens digit only.'],
            [`${n} + 0`, 'This is true but not the requested tens-and-ones partition.', 'Show tens and ones separately.'],
          ]),
          `${n} is ${tens} plus ${ones}.`,
        )
    }),
    ...addition([[23, 14], [35, 22], [46, 13], [52, 17], [64, 25], [71, 18], [28, 39], [45, 36]], 'Addition and subtraction', 'Class 2 addition works toward fluency within 100.'),
    ...subtraction([[45, 22], [67, 31], [84, 20], [73, 16], [91, 45], [58, 29], [62, 37], [100, 64]], 'Addition and subtraction', 'Use place value and check by adding back.'),
    ...multiplication([[2, 4], [2, 7], [5, 6], [5, 9], [10, 3], [10, 8], [3, 4], [4, 5]], 'Multiplication and division'),
    ...division([[2, 6], [3, 4], [4, 5], [5, 3], [2, 9], [5, 7]], 'Multiplication and division'),
    ...[
      ['Which number is even?', '48', 'Even numbers can be split into two equal groups.'],
      ['What is 1/4 of 12?', '3', 'One quarter means divide the whole by 4.'],
      ['What time is 25 minutes after 2:00?', '2:25', 'Add 25 minutes to the same hour.'],
      ['Which unit is best for the length of a pencil?', 'centimeters', 'Small lengths are usually measured in centimeters.'],
      ['How many faces does a cube have?', '6', 'A cube has six square faces.'],
      ['A bar chart shows 7 cats and 4 dogs. How many pets altogether?', '11', 'Add the two categories: 7 + 4 = 11.'],
      ['How many centimeters are in 1 meter?', '100', 'One meter equals 100 centimeters.'],
      ['Two quarters are equal to what fraction?', '1/2', 'Two fourths cover the same amount as one half.'],
      ['What is 3 more than 68?', '71', 'Count forward three steps from 68.'],
      ['What is 10 less than 95?', '85', 'Subtracting 10 lowers the tens digit by one.'],
      ['Share 20 counters equally between 4 children. How many each?', '5', '20 divided into 4 equal groups gives 5 in each group.'],
      ['Which number has 7 tens and 2 ones?', '72', 'Seven tens make 70, and two ones make 72.'],
      ['What is double 9?', '18', 'Double 9 means 9 + 9.'],
      ['What is half of 18?', '9', 'Half means split into two equal parts.'],
    ].map(([prompt, correct, lesson]) => (id: number) =>
      define(
        id,
        prompt.includes('fraction') || prompt.includes('quarter') ? 'Fractions, measurement, and geometry' : 'Fractions, measurement, and geometry',
        'Year 2 skill',
        prompt,
        correct,
        textWrong([
          ['8', 'This is a nearby count but does not answer the exact question.', 'Use the operation or property being asked for.'],
          ['10', 'This often comes from rounding or using the wrong unit.', 'Check the exact fact.'],
          ['1/4', 'This names one quarter, not necessarily the result asked for.', 'Use the whole amount in the prompt.'],
        ]),
        lesson,
      ),
    ),
  ]

  return bank(baseId, builders)
}

function makeArithmeticBank(baseId: number): Question[] {
  const builders: Array<(id: number) => QuestionDefinition> = [
    ...addition([[8, 7], [9, 6], [34, 7], [28, 9], [30, 50], [23, 14], [45, 25], [39, 18], [16, 17], [58, 6]], 'Addition fluency', 'Use mental strategies such as making ten or adding tens first.'),
    ...subtraction([[13, 5], [15, 8], [43, 6], [52, 9], [70, 30], [45, 22], [63, 28], [91, 47], [80, 35], [56, 19]], 'Subtraction fluency', 'Check subtraction by adding the difference back.'),
    ...multiplication([[2, 8], [2, 11], [5, 7], [5, 12], [10, 9], [3, 6], [4, 7], [2, 12], [5, 8], [10, 11]], 'Multiplication foundations'),
    ...division([[3, 5], [4, 4], [2, 12], [5, 6], [10, 7], [2, 18], [4, 8], [5, 9]], 'Division foundations'),
    ...[12, 18, 24, 30, 42, 50].map((n) => (id: number) =>
      define(
        id,
        'Division foundations',
        'Halving',
        `What is half of ${n}?`,
        `${n / 2}`,
        numericWrong(n / 2, [n * 2, n / 2 + 2, n - 2]),
        `Halving splits ${n} into two equal parts, giving ${n / 2}.`,
      ),
    ),
    ...[14, 21, 37, 46, 59, 68].map((n) => (id: number) =>
      define(
        id,
        'Addition fluency',
        'Add ten',
        `What is ${n} + 10?`,
        `${n + 10}`,
        numericWrong(n + 10, [n + 1, n - 10, n + 20]),
        `Adding 10 increases the tens digit by one: ${n} becomes ${n + 10}.`,
      ),
    ),
  ]

  return bank(baseId, builders)
}

function makeTimesTablesBank(baseId: number): Question[] {
  const coreFacts: Array<[number, number]> = []
  for (const table of [2, 5, 10, 3, 4]) {
    for (const factor of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
      coreFacts.push([table, factor])
    }
  }

  return bank(baseId, [
    ...multiplication(coreFacts, 'Times tables'),
    ...[2, 5, 10, 3, 4].flatMap((table) =>
      [4, 6, 8, 9].map((factor) => {
        const product = table * factor
        return (id: number) =>
          define(
            id,
            'Related division facts',
            'Missing factor',
            `What number makes ${table} x ? = ${product}?`,
            `${factor}`,
            numericWrong(factor, [table, factor + 1, factor - 1]),
            `Use the related fact: ${product} divided by ${table} equals ${factor}.`,
          )
      }),
    ),
  ])
}

function makeBasicGeometryAndMeasurementBank(baseId: number): Question[] {
  const shapeFacts: Array<[string, string, string, WrongAnswer[]]> = [
    ['How many sides does a pentagon have?', '5', 'A pentagon has five straight sides.', numericWrong(5, [4, 6, 8])],
    ['How many sides does a hexagon have?', '6', 'A hexagon has six straight sides.', numericWrong(6, [5, 7, 8])],
    ['How many vertices does a triangle have?', '3', 'A triangle has three corners, called vertices.', numericWrong(3, [2, 4, 5])],
    ['Which 2D shape has four equal sides and four right angles?', 'square', 'A square has four equal sides and four right angles.', textWrong([['rectangle', 'Some rectangles do not have four equal sides.', 'Use every clue, including equal sides.'], ['triangle', 'A triangle has three sides.', 'Count the sides first.'], ['circle', 'A circle has no straight sides.', 'Use the straight-side clues.']])],
    ['Which 3D shape has 6 square faces?', 'cube', 'A cube has six square faces.', textWrong([['sphere', 'A sphere has no flat faces.', 'Think about flat faces.'], ['cone', 'A cone has one curved surface and one circular face.', 'Match the face count.'], ['cylinder', 'A cylinder has circular faces.', 'Use square faces as the clue.']])],
    ['A tin can is closest to which 3D shape?', 'cylinder', 'A can has two circular faces and one curved surface.', textWrong([['cube', 'A cube has square faces.', 'Compare the faces of the object.'], ['sphere', 'A sphere is round like a ball.', 'A can has flat circular ends.'], ['pyramid', 'A pyramid comes to a point.', 'Use the real-world shape.']])],
  ]

  const builders: Array<(id: number) => QuestionDefinition> = [
    ...shapeFacts.map(([prompt, correct, lesson, wrong]) => (id: number) =>
      define(id, '2D and 3D shapes', 'Shape property', prompt, correct, wrong, lesson),
    ),
    ...[3, 4, 5, 6, 7, 8, 9, 10].map((side) => (id: number) =>
      define(
        id,
        'Measurement',
        'Length estimate',
        `A pencil is ${side} centimeters long. It gets ${side} more centimeters added by another pencil. What is the total length?`,
        `${side * 2} cm`,
        numericWrong(side * 2, [side + 2, side * 2 + 1, side], ' cm'),
        `Add the two lengths: ${side} cm + ${side} cm = ${side * 2} cm.`,
      ),
    ),
    ...[
      ['Which unit is best for measuring a classroom door height?', 'meters', 'A door is tall enough that meters are more sensible than centimeters.'],
      ['Which unit is best for the mass of a paperclip?', 'grams', 'A paperclip has a small mass, so grams fit best.'],
      ['Which unit is best for water in a bottle?', 'milliliters', 'Small liquid amounts are often measured in milliliters.'],
      ['How many grams are in 1 kilogram?', '1000', 'One kilogram equals 1000 grams.'],
      ['How many centimeters are in 2 meters?', '200', 'Each meter has 100 centimeters, so 2 meters has 200 centimeters.'],
      ['What direction is opposite North?', 'South', 'North and South are opposite compass directions.'],
      ['What turn takes you halfway around?', 'half turn', 'A half turn rotates 180 degrees, halfway around.'],
      ['What time is quarter past 4?', '4:15', 'Quarter past means 15 minutes after the hour.'],
      ['A film starts at 3:00 and ends at 4:30. How long is it?', '1 hour 30 minutes', 'From 3:00 to 4:30 is one hour and thirty minutes.'],
      ['On a grid, which coordinate is read first in B3?', 'B', 'Grid references read the letter or horizontal position first.'],
    ].map(([prompt, correct, lesson]) => (id: number) =>
      define(
        id,
        'Position, direction, and time',
        'Measurement and position',
        prompt,
        correct,
        textWrong([
          ['minutes', 'This names a unit but not the correct answer here.', 'Match the unit or direction to the question.'],
          ['East', 'This is a compass direction, but not the one described.', 'Use the exact direction relationship.'],
          ['4:45', 'This is quarter to 5, not quarter past 4.', 'Quarter past adds 15 minutes.'],
        ]),
        lesson,
      ),
    ),
    ...[4, 5, 6, 7, 8, 9, 10, 12].map((side) => (id: number) =>
      define(
        id,
        'Measurement',
        'Perimeter by counting',
        `A square has side length ${side} cm. What is its perimeter?`,
        `${side * 4} cm`,
        numericWrong(side * 4, [side * 2, side * side, side + 4], ' cm'),
        `Perimeter is the distance around. A square has four equal sides, so ${side} x 4 = ${side * 4} cm.`,
      ),
    ),
    ...[2, 3, 4, 5, 6, 7, 8, 9].map((width) => (id: number) =>
      define(
        id,
        'Measurement',
        'Area by squares',
        `A rectangle covers ${width} rows of 3 squares. How many squares are covered?`,
        `${width * 3}`,
        numericWrong(width * 3, [width + 3, width * 2, width * 3 + 3]),
        `Area by counting squares uses rows times columns: ${width} x 3 = ${width * 3}.`,
      ),
    ),
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((hour) => (id: number) =>
      define(
        id,
        'Position, direction, and time',
        'Clock time',
        `What digital time means half past ${hour}?`,
        `${hour}:30`,
        textWrong([
          [`${hour}:00`, 'That is exactly the hour, not half past.', 'Half past means 30 minutes after.'],
          [`${hour}:15`, 'That is quarter past.', 'Use 30 minutes for half past.'],
          [`${hour}:45`, 'That is quarter to the next hour.', 'Half past is halfway through the hour.'],
        ]),
        `Half past ${hour} is ${hour}:30.`,
      ),
    ),
  ]

  return bank(baseId, builders)
}

function makeClass3MathBank(baseId: number): Question[] {
  const builders: Array<(id: number) => QuestionDefinition> = [
    ...[372, 486, 519, 640, 753, 908].map((n) => (id: number) =>
      define(
        id,
        'Place value and number to 1000',
        'Round to nearest ten',
        `What is ${n} rounded to the nearest 10?`,
        `${Math.round(n / 10) * 10}`,
        numericWrong(Math.round(n / 10) * 10, [Math.floor(n / 10) * 10, Math.ceil(n / 100) * 100, n]),
        `To round to the nearest 10, look at the ones digit of ${n}.`,
      ),
    ),
    ...addition([[287, 345], [426, 158], [319, 204], [572, 216], [638, 145], [751, 129]], 'Addition and subtraction', 'Grade 3 uses place value and column methods within 1000.'),
    ...subtraction([[642, 318], [805, 267], [734, 289], [900, 455], [581, 197], [760, 341]], 'Addition and subtraction', 'Use regrouping when a place value column needs it.'),
    ...multiplication([[3, 7], [4, 8], [8, 6], [3, 9], [4, 12], [8, 5], [6, 7], [7, 8]], 'Multiplication and division'),
    ...division([[3, 8], [4, 7], [8, 4], [6, 6], [7, 5], [9, 4]], 'Multiplication and division'),
    ...[
      fractionQuestion('Fractions', 'Which fraction is equivalent to 1/2?', '2/4', textWrong([['1/4', 'This is smaller than one half.', 'Equivalent means the same amount.'], ['2/3', 'This is greater than one half.', 'Use a matching numerator and denominator scale.'], ['3/4', 'This is three quarters, not one half.', 'Compare with a simple diagram.']]), 'Two fourths covers the same amount as one half.'),
      fractionQuestion('Fractions', 'What is 2/6 + 3/6?', '5/6', textWrong([['5/12', 'The denominator should not be added.', 'Keep the denominator when it is the same.'], ['1/6', 'This subtracts instead of adds.', 'Add the numerators.'], ['6/5', 'This flips the fraction.', 'Keep part over whole.']]), 'With the same denominator, add only the numerators.'),
      fractionQuestion('Fractions', 'Which is larger: 1/3 or 1/6?', '1/3', textWrong([['1/6', 'Sixths are smaller pieces than thirds.', 'For unit fractions, a larger denominator means smaller pieces.'], ['They are equal', 'They name different-sized pieces.', 'Compare equal wholes.'], ['2/6', 'This is equivalent to 1/3 but not one of the two choices.', 'Answer the exact comparison.']]), 'One third is larger than one sixth because thirds are bigger pieces.'),
      fractionQuestion('Fractions', 'What fraction is 3 equal shaded parts out of 8 equal parts?', '3/8', textWrong([['8/3', 'This reverses part and whole.', 'Use shaded parts over total parts.'], ['5/8', 'That counts unshaded parts.', 'Count shaded parts only for the numerator.'], ['3/5', 'The denominator should be all equal parts.', 'Use the total number of parts.']]), 'Fractions use shaded or chosen parts over total equal parts.'),
    ],
    ...[4, 5, 6, 7, 8, 9].map((length) => (id: number) =>
      define(
        id,
        'Measurement, geometry, and statistics',
        'Rectangle area',
        `A rectangle is ${length} units long and 3 units wide. What is its area?`,
        `${length * 3} square units`,
        numericWrong(length * 3, [length + 3, length * 2, length * 3 + 3], ' square units'),
        `Area of a rectangle is length times width: ${length} x 3 = ${length * 3}.`,
      ),
    ),
    ...[5, 6, 7, 8, 9, 10].map((length) => (id: number) =>
      define(
        id,
        'Measurement, geometry, and statistics',
        'Rectangle perimeter',
        `A rectangle has sides ${length} cm and 2 cm. What is the perimeter?`,
        `${2 * (length + 2)} cm`,
        numericWrong(2 * (length + 2), [length + 2, length * 2, length * 2 + 2], ' cm'),
        `Perimeter adds all sides: ${length} + 2 + ${length} + 2 = ${2 * (length + 2)} cm.`,
      ),
    ),
    ...[
      ['A clock shows 7:45. How many minutes after 7 is that?', '45', 'The minute part of 7:45 is 45 minutes.'],
      ['Which Roman numeral means 9?', 'IX', 'IX means one before ten, which is 9.'],
      ['An angle like the corner of a square is called what?', 'right angle', 'A square corner is a right angle.'],
      ['A bar chart shows 12 sunny days and 8 rainy days. How many days altogether?', '20', 'Add the categories: 12 + 8 = 20.'],
    ].map(([prompt, correct, lesson]) => (id: number) =>
      define(
        id,
        'Measurement, geometry, and statistics',
        'Mixed measurement skill',
        prompt,
        correct,
        textWrong([
          ['10', 'This uses a nearby benchmark but not the exact fact.', 'Use the stated values.'],
          ['acute angle', 'An acute angle is smaller than a right angle.', 'Compare to a square corner.'],
          ['IV', 'This Roman numeral means 4, not 9.', 'Check the Roman numeral rule.'],
        ]),
        lesson,
      ),
    ),
  ]

  return bank(baseId, builders)
}

function makeClass4MathBank(baseId: number): Question[] {
  const builders: Array<(id: number) => QuestionDefinition> = [
    ...[5482, 6317, 7205, 8641, 9056, 4329].map((n) => {
      const hundreds = Math.floor((n % 1000) / 100)
      return (id: number) =>
        define(
          id,
          'Number and place value',
          'Digit value',
          `In ${n}, what is the value of the hundreds digit?`,
          `${hundreds * 100}`,
          numericWrong(hundreds * 100, [hundreds, hundreds * 10, hundreds * 1000]),
          `The hundreds digit is worth groups of 100, so it has value ${hundreds * 100}.`,
        )
    }),
    ...[2368, 4512, 6789, 8125, 9344, 10567].map((n) => (id: number) =>
      define(
        id,
        'Number and place value',
        'Round to nearest hundred',
        `What is ${n} rounded to the nearest 100?`,
        `${Math.round(n / 100) * 100}`,
        numericWrong(Math.round(n / 100) * 100, [Math.floor(n / 100) * 100, Math.round(n / 10) * 10, n]),
        `Round to the nearest hundred by checking whether the tens digit is 5 or more.`,
      ),
    ),
    ...addition([[2345, 1267], [4189, 2350], [6075, 1896], [7320, 2481]], 'The four operations', 'Use column addition and keep place values aligned.'),
    ...subtraction([[5000, 2368], [8421, 3579], [7004, 2689], [9360, 4815]], 'The four operations', 'Use exchanging when a column cannot subtract directly.'),
    ...multiplication([[6, 7], [7, 8], [8, 9], [9, 12], [12, 6], [11, 7], [23, 4], [34, 5], [126, 3], [208, 4]], 'Times tables mastery'),
    ...division([[6, 7], [7, 8], [8, 9], [9, 6], [12, 7], [5, 23]], 'The four operations'),
    ...[
      fractionQuestion('Fractions and decimals', 'Which fraction is equivalent to 3/4?', '6/8', textWrong([['3/8', 'Only the denominator changed.', 'Multiply numerator and denominator by the same number.'], ['4/3', 'This reverses the fraction.', 'Keep part over whole.'], ['6/4', 'Only the numerator changed correctly.', 'Scale both parts equally.']]), 'Multiplying top and bottom of 3/4 by 2 gives 6/8.'),
      fractionQuestion('Fractions and decimals', 'What is 5/8 + 2/8?', '7/8', textWrong([['7/16', 'Do not add equal denominators.', 'Keep the denominator 8.'], ['3/8', 'This subtracts instead of adds.', 'Add the numerators.'], ['1', 'Seven eighths is close to a whole, but not equal to one.', 'Check the numerator against the denominator.']]), 'Like denominators stay the same when adding fractions.'),
      fractionQuestion('Fractions and decimals', 'Which decimal equals 1/2?', '0.5', textWrong([['0.25', 'This equals one quarter.', 'Half of one is five tenths.'], ['0.75', 'This equals three quarters.', 'Compare to benchmark fractions.'], ['1.2', 'This reads the fraction digits as a decimal.', 'Use the known equivalent.']]), 'One half is five tenths, written 0.5.'),
      fractionQuestion('Fractions and decimals', 'What is 3.6 divided by 10?', '0.36', textWrong([['36', 'That moves the decimal the wrong way.', 'Dividing by 10 makes the number smaller.'], ['3.60', 'That keeps the same value.', 'Move one place to the right only when multiplying by 10.'], ['0.036', 'That divides by 100.', 'Move one decimal place for division by 10.']]), 'Dividing by 10 moves each digit one place right in place value, giving 0.36.'),
    ],
    ...[6, 7, 8, 9, 10, 12].map((length) => (id: number) =>
      define(
        id,
        'Measurement, geometry, and statistics',
        'Area of a rectangle',
        `A rectangle is ${length} m long and 4 m wide. What is its area?`,
        `${length * 4} square meters`,
        numericWrong(length * 4, [length + 4, 2 * (length + 4), length * 2], ' square meters'),
        `Area is length times width: ${length} x 4 = ${length * 4} square meters.`,
      ),
    ),
    ...[
      ['What type of angle is 120 degrees?', 'obtuse angle', 'An obtuse angle is greater than 90 degrees and less than 180 degrees.'],
      ['Which triangle has all sides equal?', 'equilateral triangle', 'Equilateral means all sides are equal.'],
      ['On a coordinate grid, which point has x = 3 and y = 5?', '(3, 5)', 'Coordinates are written as x first, then y.'],
      ['How many minutes are in 4 hours?', '240', 'Each hour has 60 minutes, so 4 x 60 = 240.'],
      ['What Roman numeral means 50?', 'L', 'The Roman numeral L represents 50.'],
      ['Which number is prime: 21, 29, 35, or 39?', '29', '29 has no whole-number factors except 1 and 29.'],
    ].map(([prompt, correct, lesson]) => (id: number) =>
      define(
        id,
        'Measurement, geometry, and statistics',
        'Grade 4 mixed skill',
        prompt,
        correct,
        textWrong([
          ['acute angle', 'This is less than 90 degrees, so it does not match.', 'Compare to 90 degrees.'],
          ['(5, 3)', 'This reverses x and y.', 'Read x first, then y.'],
          ['C', 'C is 100, not 50.', 'Use the Roman numeral value.'],
        ]),
        lesson,
      ),
    ),
  ]

  return bank(baseId, builders)
}

function makeGrade5MathBank(baseId: number, ready = false): Question[] {
  const builders: Array<(id: number) => QuestionDefinition> = [
    ...[0.7, 0.65, 1.24, 1.209, 3.5, 3.47].map((n, index) => {
      const compare = [0.65, 0.7, 1.204, 1.29, 3.05, 3.5][index]
      const correct = n > compare ? n : compare
      return (id: number) =>
        define(
          id,
          'Number and operations in base ten',
          'Compare decimals',
          `Which decimal is greater: ${n} or ${compare}?`,
          `${correct}`,
          textWrong([
            [`${n === correct ? compare : n}`, 'This decimal is smaller after comparing place values.', 'Write both numbers to the same number of decimal places.'],
            ['They are equal', 'The place values do not match exactly.', 'Compare tenths, then hundredths, then thousandths.'],
            [`${Math.max(n, compare) * 10}`, 'This ignores the decimal scale.', 'Keep the decimal point in place.'],
          ]),
          `Compare decimals by lining up place values; the greater value is ${correct}.`,
        )
    }),
    ...addition([[347, 268], [1250, 375], [4086, 1907], [5, 7]], ready ? 'Readiness: whole-number fluency' : 'Number and operations in base ten', 'Strong whole-number fluency supports grade 5 decimal and fraction work.'),
    ...multiplication([[24, 6], [36, 8], [125, 4], [215, 3], [18, 12], [32, 15]], ready ? 'Readiness: multiplication' : 'Number and operations in base ten'),
    ...[
      fractionQuestion('Number and operations: fractions', 'What is 1/3 + 1/6?', '1/2', textWrong([['2/9', 'This adds denominators directly.', 'Use equivalent fractions first.'], ['1/9', 'This multiplies denominators without adding the amounts.', 'Find a common denominator.'], ['2/6', 'This adds numerators but misses the equivalent form of 1/3.', 'Change 1/3 to 2/6 first.']]), 'Convert 1/3 to 2/6, then 2/6 + 1/6 = 3/6 = 1/2.'),
      fractionQuestion('Number and operations: fractions', 'What is 3/4 - 1/4?', '2/4', textWrong([['2/0', 'The denominator should not be subtracted.', 'Keep like denominators the same.'], ['4/4', 'This adds instead of subtracts.', 'Subtract the numerators.'], ['1/2', 'This is equivalent, but the direct like-denominator difference is 2/4.', 'Use the requested fraction operation first.']]), 'For like denominators, subtract numerators and keep the denominator.'),
      fractionQuestion('Number and operations: fractions', 'What is 2/3 x 3/4?', '1/2', textWrong([['6/12', 'This is equivalent before simplifying.', 'Simplify the product.'], ['5/7', 'This adds numerators and denominators.', 'Multiplication uses products, not sums.'], ['2/4', 'This cancels incorrectly before multiplying.', 'Cancel only common factors.']]), 'Multiply across: 2 x 3 over 3 x 4 = 6/12 = 1/2.'),
      fractionQuestion('Number and operations: fractions', 'If 3 pizzas are shared equally by 4 children, what does each child get?', '3/4 pizza', textWrong([['4/3 pizza', 'This reverses children and pizzas.', 'Use pizzas divided by children.'], ['1/4 pizza', 'That would be one pizza shared by four children.', 'Use all three pizzas.'], ['3 pizzas', 'That gives the total, not each share.', "Find each child's equal part."]]), 'A fraction can show division: 3 divided by 4 is 3/4.'),
    ],
    ...[2, 3, 4, 5, 6, 7].map((side) => (id: number) =>
      define(
        id,
        'Measurement and data',
        'Volume',
        `A rectangular prism is ${side} cm long, 3 cm wide, and 4 cm high. What is its volume?`,
        `${side * 3 * 4} cubic cm`,
        numericWrong(side * 3 * 4, [side + 3 + 4, side * 3, 2 * (side + 3 + 4)], ' cubic cm'),
        `Volume of a rectangular prism is length x width x height: ${side} x 3 x 4 = ${side * 3 * 4}.`,
      ),
    ),
    ...[
      ['Evaluate 2 x (8 + 7).', '30', 'Parentheses are done first: 8 + 7 = 15, then 2 x 15 = 30.'],
      ['Which point has x-coordinate 4 and y-coordinate 2?', '(4, 2)', 'Coordinate pairs are written x first, y second.'],
      ['How many millimeters are in 5 centimeters?', '50', 'Each centimeter has 10 millimeters, so 5 cm has 50 mm.'],
      ['What is 4.8 + 1.7?', '6.5', 'Line up decimal points and regroup tenths.'],
      ['What is 6.3 - 2.8?', '3.5', 'Subtract decimals by place value with regrouping.'],
      ['What is 0.6 x 5?', '3', 'Six tenths taken five times is thirty tenths, or 3.'],
      ['Which shape category includes all squares?', 'rectangles', 'Every square has four right angles, so every square is a rectangle.'],
      ['Round 3.746 to the nearest hundredth.', '3.75', 'The thousandths digit is 6, so the hundredths digit rounds up.'],
      ['What is 12.5 x 10?', '125', 'Multiplying by 10 moves each digit one place left in value.'],
      ['What is 4.2 divided by 10?', '0.42', 'Dividing by 10 makes the number ten times smaller.'],
      ['What is 2.4 + 3.18?', '5.58', 'Line up the decimal points before adding.'],
      ['What is 7.00 - 2.35?', '4.65', 'Use zeros as placeholders when subtracting decimals.'],
      ['What is 36 divided by 12?', '3', '12 fits into 36 three times.'],
      ['What is 144 divided by 9?', '16', 'Use the related multiplication fact 9 x 16 = 144.'],
      ['How many centimeters are in 2.5 meters?', '250', 'Each meter has 100 centimeters, so 2.5 meters is 250 centimeters.'],
      ['How many liters are in 3000 milliliters?', '3', '1000 milliliters equals 1 liter.'],
      ['Which point is 5 units right and 1 unit up from the origin?', '(5, 1)', 'Right is the x-coordinate and up is the y-coordinate.'],
      ['If a pattern starts at 2 and adds 3 each time, what is the fourth term?', '11', 'The terms are 2, 5, 8, 11.'],
      ['Write "add 6 and 4, then multiply by 3" as an expression.', '3 x (6 + 4)', 'Parentheses show that 6 + 4 happens first.'],
      ['What is 1/5 of 35?', '7', 'One fifth means divide by 5.'],
      ['What is 3/10 written as a decimal?', '0.3', 'Three tenths is written 0.3.'],
      ['Which is greater: 2/3 or 2/5?', '2/3', 'With the same numerator, thirds are larger pieces than fifths.'],
      ['What is the volume of a cube with side length 4?', '64 cubic units', 'A cube volume is side x side x side: 4 x 4 x 4 = 64.'],
      ['What is 0.25 as a fraction benchmark?', '1/4', '0.25 is twenty-five hundredths, equal to one quarter.'],
    ].map(([prompt, correct, lesson]) => (id: number) =>
      define(
        id,
        ready ? 'Readiness: grade 4 review' : 'Operations, geometry, and measurement',
        'Grade 5 mixed skill',
        prompt,
        correct,
        textWrong([
          ['15', 'This stops after the parentheses or misses a factor.', 'Complete every operation in order.'],
          ['(2, 4)', 'This reverses the coordinate order.', 'Read x first, then y.'],
          ['6.15', 'This treats decimal digits like whole numbers.', 'Line up place values.'],
        ]),
        lesson,
      ),
    ),
  ]

  return bank(baseId, builders)
}

function makeGrade6MathBank(baseId: number, ready = false): Question[] {
  const builders: Array<(id: number) => QuestionDefinition> = [
    ...[
      ['Simplify the ratio 8:12.', '2:3', 'Divide both parts of 8:12 by 4.'],
      ['A recipe uses 3 cups flour for 2 cups sugar. What is the ratio of flour to sugar?', '3:2', 'Write the quantities in the order named: flour to sugar.'],
      ['If 4 notebooks cost $12, what is the cost per notebook?', '$3', 'Unit rate means cost for one item: 12 divided by 4.'],
      ['What is 25% of 80?', '20', '25% is one quarter, and one quarter of 80 is 20.'],
      ['Which ratio is equivalent to 2:5?', '4:10', 'Multiply both parts of 2:5 by 2.'],
      ['A car travels 120 miles in 3 hours. What is its speed?', '40 miles per hour', 'Divide distance by time: 120 divided by 3.'],
    ].map(([prompt, correct, lesson]) => (id: number) =>
      define(
        id,
        ready ? 'Readiness: ratios from multiplication' : 'Ratios and proportional relationships',
        'Ratio and rate',
        prompt,
        correct,
        textWrong([
          ['3:2', 'This may reverse the order or use a nearby ratio.', 'Keep the quantities in the order asked.'],
          ['$4', 'This divides by the wrong number.', 'Find the amount for one item.'],
          ['40', 'This may be the right number without the needed unit.', 'Include the rate unit when asked.'],
        ]),
        lesson,
      ),
    ),
    ...[
      ['What is -3 + 7?', '4', 'Starting at -3 and moving 7 right lands on 4.'],
      ['What is the absolute value of -9?', '9', 'Absolute value is distance from zero, so it is nonnegative.'],
      ['Which point is 2 units left and 5 units up from the origin?', '(-2, 5)', 'Left gives a negative x-coordinate and up gives a positive y-coordinate.'],
      ['Find the GCF of 18 and 24.', '6', 'The greatest common factor of 18 and 24 is 6.'],
      ['Find the LCM of 4 and 6.', '12', '12 is the smallest positive number divisible by both 4 and 6.'],
      ['Compute 4.5 divided by 0.5.', '9', 'There are nine halves in 4.5.'],
    ].map(([prompt, correct, lesson]) => (id: number) =>
      define(
        id,
        ready ? 'Readiness: number system' : 'The number system',
        'Number system',
        prompt,
        correct,
        textWrong([
          ['-4', 'This keeps the wrong sign after moving on the number line.', 'Track direction carefully.'],
          ['3', 'This is a common factor or nearby value but not the exact answer.', 'List factors or multiples systematically.'],
          ['(2, -5)', 'This reverses directions on the coordinate plane.', 'Left is negative x, up is positive y.'],
        ]),
        lesson,
      ),
    ),
    ...[
      ['Evaluate 2^4.', '16', '2^4 means 2 x 2 x 2 x 2.'],
      ['Evaluate 3x + 2 when x = 5.', '17', 'Substitute 5 for x: 3 x 5 + 2 = 17.'],
      ['Solve x + 9 = 15.', '6', 'Subtract 9 from both sides to isolate x.'],
      ['Solve 4x = 28.', '7', 'Divide both sides by 4.'],
      ['Which expression means "5 less than y"?', 'y - 5', 'Five less than y means start with y and subtract 5.'],
      ['Which expression is equivalent to 3(x + 4)?', '3x + 12', 'Use the distributive property: 3 times x and 3 times 4.'],
      ['If tickets cost $6 each, which expression gives the cost of t tickets?', '6t', 'Multiply the price per ticket by the number of tickets.'],
      ['Which value makes x > 8 true?', '10', '10 is greater than 8.'],
    ].map(([prompt, correct, lesson]) => (id: number) =>
      define(
        id,
        ready ? 'Readiness: expressions' : 'Expressions and equations',
        'Expression or equation',
        prompt,
        correct,
        textWrong([
          ['14', 'This comes from skipping part of the expression or equation.', 'Substitute and use order of operations.'],
          ['5 - y', 'This reverses the phrase.', 'Pay attention to "less than" wording.'],
          ['3x + 4', 'This distributes to only one term.', 'Multiply every term inside the parentheses.'],
        ]),
        lesson,
      ),
    ),
    ...[6, 8, 10, 12, 14, 16].map((base) => (id: number) =>
      define(
        id,
        'Geometry',
        'Triangle area',
        `A triangle has base ${base} and height 5. What is its area?`,
        `${(base * 5) / 2} square units`,
        numericWrong((base * 5) / 2, [base * 5, base + 5, base * 2], ' square units'),
        `Triangle area is one-half times base times height: ${base} x 5 / 2 = ${(base * 5) / 2}.`,
      ),
    ),
    ...[
      ['Find the mean of 4, 6, 8, and 10.', '7', 'The sum is 28 and there are 4 values, so the mean is 7.'],
      ['Find the median of 3, 5, 9, 12, 14.', '9', 'The median is the middle value when data are ordered.'],
      ['What is the range of 2, 7, 8, 11?', '9', 'Range is greatest minus least: 11 - 2 = 9.'],
      ['Which question is statistical?', 'How many minutes do students in our class read each night?', 'A statistical question expects varied data from a group.'],
      ['A box plot shows Q1 = 4 and Q3 = 10. What is the IQR?', '6', 'IQR is Q3 minus Q1: 10 - 4 = 6.'],
      ['What is the volume of a prism with length 5, width 4, and height 3?', '60 cubic units', 'Volume is length x width x height: 5 x 4 x 3 = 60.'],
      ['A ratio table has 2 cups rice for 5 cups water. How much water for 6 cups rice?', '15 cups', 'Tripling the rice from 2 to 6 triples the water from 5 to 15.'],
      ['What is 10% of 90?', '9', 'Ten percent means one tenth.'],
      ['What is 75% of 40?', '30', '75% is three quarters, and three quarters of 40 is 30.'],
      ['Compute 6.4 + 2.85.', '9.25', 'Line up decimal places and add by place value.'],
      ['Compute 8.1 - 3.46.', '4.64', 'Use a zero placeholder: 8.10 - 3.46 = 4.64.'],
      ['Compute 1.2 x 0.5.', '0.6', 'Half of 1.2 is 0.6.'],
      ['Compute 18 divided by 3/4.', '24', 'Dividing by 3/4 asks how many three-fourths fit in 18.'],
      ['Write 36 + 8 using the distributive property with common factor 4.', '4(9 + 2)', '36 = 4 x 9 and 8 = 4 x 2.'],
      ['Which expression is a sum?', 'x + 7', 'A sum is the result or expression of addition.'],
      ['Solve y - 5 = 12.', '17', 'Add 5 to both sides.'],
      ['Solve x/3 = 8.', '24', 'Multiply both sides by 3.'],
      ['Which inequality means a number is less than 6?', 'x < 6', 'The less-than symbol points toward the smaller side.'],
      ['A point has coordinates (-4, -3). Which quadrant is it in?', 'Quadrant III', 'Negative x and negative y place the point in Quadrant III.'],
      ['A rectangle on a coordinate plane runs from x = 2 to x = 8. How long is that side?', '6 units', 'Subtract the x-coordinates: 8 - 2 = 6.'],
      ['What is the area of a parallelogram with base 9 and height 4?', '36 square units', 'Parallelogram area is base x height.'],
      ['Which data display groups values into intervals?', 'histogram', 'A histogram uses intervals to show numerical data.'],
      ['Find the mode of 2, 4, 4, 5, 7.', '4', 'The mode is the value that appears most often.'],
      ['What is the surface area of a cube with side length 3?', '54 square units', 'A cube has 6 square faces, each with area 9.'],
    ].map(([prompt, correct, lesson]) => (id: number) =>
      define(
        id,
        ready ? 'Readiness: data and geometry' : 'Statistics and geometry',
        'Data and geometry',
        prompt,
        correct,
        textWrong([
          ['28', 'This is the sum, not the requested statistic.', 'Check whether the question asks for mean, median, or range.'],
          ['4', 'This uses one quartile or endpoint only.', 'Use the correct formula.'],
          ['12 square units', 'This uses the wrong measure or operation.', 'Use the formula named in the question.'],
        ]),
        lesson,
      ),
    ),
  ]

  return bank(baseId, builders)
}

export const class1Math = makeClass1MathBank(910000)
export const class2Math = makeClass2MathBank(920000)
export const class3Math = makeClass3MathBank(930000)
export const class4Math = makeClass4MathBank(940000)
export const arithmetic = makeArithmeticBank(950000)
export const timesTables = makeTimesTablesBank(960000)

export const colArithmetic = makeArithmeticBank(970000)
export const colBasicGeometryAndMeasurement = makeBasicGeometryAndMeasurementBank(980000)
export const colTimesTables = makeTimesTablesBank(990000)
export const colEarlyMathReview = makeEarlyMathReviewBank(1000000)
export const col3rdGrade = makeClass3MathBank(1010000)
export const col3rdGradeNyNextGen = makeClass3MathBank(1020000)
export const colGetReadyFor3rdGrade = makeClass2MathBank(1030000)
export const col4thGradeNyNextGen = makeClass4MathBank(1040000)
export const colGetReadyFor4thGrade = makeClass3MathBank(1050000)
export const col5thGradeNyNextGen = makeGrade5MathBank(1060000)
export const colGetReadyFor5thGrade = makeClass4MathBank(1070000)
export const col6thGradeNyNextGen = makeGrade6MathBank(1080000)
export const colGetReadyFor6thGrade = makeGrade5MathBank(1090000, true)

export const primaryGeneratedMathQuestionsByTrack: Record<string, Question[]> = {
  class1Math,
  class2Math,
  class3Math,
  class4Math,
  arithmetic,
  timesTables,
  'col-arithmetic': colArithmetic,
  'col-basic-geometry-and-measurement': colBasicGeometryAndMeasurement,
  'col-times-tables': colTimesTables,
  'col-early-math-review': colEarlyMathReview,
  'col-3rd-grade': col3rdGrade,
  'col-3rd-grade-ny-next-gen': col3rdGradeNyNextGen,
  'col-get-ready-for-3rd-grade': colGetReadyFor3rdGrade,
  'col-4th-grade-ny-next-gen': col4thGradeNyNextGen,
  'col-get-ready-for-4th-grade': colGetReadyFor4thGrade,
  'col-5th-grade-ny-next-gen': col5thGradeNyNextGen,
  'col-get-ready-for-5th-grade': colGetReadyFor5thGrade,
  'col-6th-grade-ny-next-gen': col6thGradeNyNextGen,
  'col-get-ready-for-6th-grade': colGetReadyFor6thGrade,
}
