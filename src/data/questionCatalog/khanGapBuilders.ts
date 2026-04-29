import { makeQuestionBank } from './base'
import type { Question, Topic } from './types'

type Definition = {
  id: number
  chapter: string
  title: string
  prompt: string
  correct: string
  wrong: [string, string, string][]
}

function buildCourse(topic: Topic, definitions: Definition[]): Question[] {
  return makeQuestionBank(topic, definitions)
}

function numericWrong(correct: number, options: number[]): [string, string, string][] {
  return options.slice(0, 3).map((value) => [
    String(value),
    'That comes from using the wrong operation or skipping one step in the setup.',
    `Work through the quantities carefully and compare against ${correct}.`,
  ])
}

function fractionWrong(correct: string, options: string[]): [string, string, string][] {
  return options.slice(0, 3).map((value) => [
    value,
    'That answer follows a common fraction mix-up but does not match the actual relationship.',
    `Use a common denominator or picture the parts before comparing with ${correct}.`,
  ])
}

export function makeIndiaClass1MathQuiz(): Question[] {
  const definitions: Definition[] = []
  let id = 30001

  ;[7, 9, 12, 15, 18].forEach((count) => {
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Counting',
      title: 'Count the dots',
      prompt: `A picture shows ${count} dots. Which number matches the picture?`,
      correct: String(count),
      wrong: numericWrong(count, [count - 1, count + 1, count + 3]),
    })
  })

  ;[
    [3, 4],
    [5, 2],
    [6, 3],
    [7, 5],
    [8, 6],
  ].forEach(([a, b]) => {
    const correct = a + b
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Addition',
      title: 'Join the groups',
      prompt: `There are ${a} shells on one rock and ${b} shells on another. How many shells are there altogether?`,
      correct: String(correct),
      wrong: numericWrong(correct, [a + b - 1, a + b + 1, Math.abs(a - b)]),
    })
  })

  ;[
    [9, 4],
    [10, 3],
    [12, 5],
    [14, 6],
    [15, 7],
  ].forEach(([a, b]) => {
    const correct = a - b
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Subtraction',
      title: 'How many left',
      prompt: `A bowl has ${a} strawberries. ${b} are eaten. How many are left?`,
      correct: String(correct),
      wrong: numericWrong(correct, [a - b + 1, a - b - 1, a + b]),
    })
  })

  ;[
    [8, 11],
    [14, 9],
    [6, 16],
    [13, 15],
    [19, 12],
  ].forEach(([a, b]) => {
    const correct = a > b ? String(a) : String(b)
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Comparing',
      title: 'Which number is larger',
      prompt: `Which number is larger: ${a} or ${b}?`,
      correct,
      wrong: numericWrong(Number(correct), [a, b, Math.min(a, b) + 1]),
    })
  })

  ;[
    ['triangle', '3'],
    ['square', '4'],
    ['rectangle', '4'],
    ['circle', '0'],
    ['triangle', '3'],
  ].forEach(([shape, correct]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Shapes',
      title: 'Shape fact',
      prompt: `How many straight sides does a ${shape} have?`,
      correct,
      wrong: [
        ['1', 'That does not match the shape.', 'Picture the shape and count its edges carefully.'],
        ['2', 'That is too few sides for this shape.', 'Count each side once.'],
        ['5', 'That is too many sides for this shape.', 'Use the basic shape definition.'],
      ],
    })
  })

  ;[
    ['longer', 'A pencil that is 12 cm long compared with one that is 8 cm long'],
    ['shorter', 'A ribbon that is 5 cm long compared with one that is 9 cm long'],
    ['heavier', 'A watermelon compared with a grape'],
    ['lighter', 'A feather compared with a brick'],
    ['taller', 'A tree compared with a flower'],
  ].forEach(([correct, setup]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Comparing objects',
      title: 'Use the clue word',
      prompt: `Which word fits this comparison: ${setup}?`,
      correct,
      wrong: [
        ['wider', 'That describes a different kind of measurement.', 'Pick the word that matches the comparison being made.'],
        ['slower', 'Speed is not being compared here.', 'Use a size or weight word, not a movement word.'],
        ['newer', 'Age is not the thing being compared.', 'Stay with the measurement clue.'],
      ],
    })
  })

  ;[
    [5, 5],
    [6, 4],
    [3, 7],
    [8, 2],
    [9, 1],
  ].forEach(([a, b]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Number bonds',
      title: 'Make ten',
      prompt: `Which number should you add to ${a} to make 10 if you already have ${a} and ${b} is one option you are checking?`,
      correct: String(10 - a),
      wrong: numericWrong(10 - a, [b, a, Math.abs(a - b)]),
    })
  })

  ;[
    [11, 12, 13],
    [14, 15, 16],
    [7, 8, 9],
    [18, 19, 20],
    [3, 4, 5],
  ].forEach(([a, b, c]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Number order',
      title: 'Find the middle number',
      prompt: `Which number comes between ${a} and ${c}?`,
      correct: String(b),
      wrong: numericWrong(b, [a, c, b + 2]),
    })
  })

  ;[
    [4, 5],
    [2, 8],
    [7, 6],
    [3, 9],
    [1, 4],
  ].forEach(([start, jump]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Skip counting',
      title: 'Hop on the number line',
      prompt: `You start at ${start} and jump forward ${jump} spaces on a number line. Where do you land?`,
      correct: String(start + jump),
      wrong: numericWrong(start + jump, [start + jump - 1, start + jump + 1, jump]),
    })
  })

  ;[
    [2, 5],
    [4, 7],
    [1, 9],
    [3, 8],
    [6, 2],
  ].forEach(([a, b]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Missing number',
      title: 'Fill the box',
      prompt: `${a} + __ = ${a + b}. Which number belongs in the box?`,
      correct: String(b),
      wrong: numericWrong(b, [a, a + b, b + 1]),
    })
  })

  return buildCourse('Primary', definitions)
}

export function makeIndiaClass2MathQuiz(): Question[] {
  const definitions: Definition[] = []
  let id = 30101

  ;[
    [34, 3],
    [56, 5],
    [71, 7],
    [82, 8],
    [49, 4],
  ].forEach(([number, tens]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Place value',
      title: 'Count the tens',
      prompt: `How many tens are in ${number}?`,
      correct: String(tens),
      wrong: numericWrong(tens, [tens + 1, number % 10, tens - 1]),
    })
  })

  ;[
    [27, 15],
    [43, 26],
    [58, 14],
    [39, 33],
    [64, 18],
  ].forEach(([a, b]) => {
    const correct = a + b
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Addition',
      title: 'Two-digit addition',
      prompt: `What is ${a} + ${b}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [correct - 10, correct + 10, a + (b % 10)]),
    })
  })

  ;[
    [72, 28],
    [65, 19],
    [81, 36],
    [90, 44],
    [57, 23],
  ].forEach(([a, b]) => {
    const correct = a - b
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Subtraction',
      title: 'Two-digit subtraction',
      prompt: `What is ${a} - ${b}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [correct + 1, correct - 10, a + b]),
    })
  })

  ;[
    [3, 4],
    [5, 2],
    [6, 3],
    [2, 7],
    [4, 5],
  ].forEach(([groups, each]) => {
    const correct = groups * each
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Equal groups',
      title: 'Make the groups',
      prompt: `There are ${groups} bags with ${each} marbles in each bag. How many marbles are there altogether?`,
      correct: String(correct),
      wrong: numericWrong(correct, [groups + each, correct - each, correct + groups]),
    })
  })

  ;[
    [60, 15],
    [45, 5],
    [72, 9],
    [84, 12],
    [36, 6],
  ].forEach(([a, b]) => {
    const correct = a / b
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Sharing equally',
      title: 'Split the snacks',
      prompt: `${a} crackers are shared equally among ${b} children. How many crackers does each child get?`,
      correct: String(correct),
      wrong: numericWrong(correct, [b, correct + 1, correct - 1]),
    })
  })

  ;[
    [100, 73],
    [120, 49],
    [90, 58],
    [150, 62],
    [80, 27],
  ].forEach(([total, used]) => {
    const correct = total - used
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Missing part',
      title: 'How much more',
      prompt: `A sticker chart has room for ${total} stickers. ${used} spots are filled. How many spots are still empty?`,
      correct: String(correct),
      wrong: numericWrong(correct, [used, correct + 10, total + used]),
    })
  })

  ;[
    ['quarter hour', '15 minutes'],
    ['half hour', '30 minutes'],
    ['1 hour', '60 minutes'],
    ['quarter hour', '15 minutes'],
    ['half hour', '30 minutes'],
  ].forEach(([label, correct]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Time',
      title: 'Clock language',
      prompt: `How many minutes are in a ${label}?`,
      correct,
      wrong: [
        ['10 minutes', 'That is too short.', 'Use the standard clock divisions.'],
        ['45 minutes', 'That mixes up quarter and three-quarter time.', 'Quarter hour means one of four equal pieces of an hour.'],
        ['90 minutes', 'That is longer than an hour.', 'Stay within the hour.'],
      ],
    })
  })

  ;[
    [35, 50],
    [42, 70],
    [18, 90],
    [25, 60],
    [47, 80],
  ].forEach(([a, b]) => {
    const correct = a < b ? '<' : '>'
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Comparing numbers',
      title: 'Choose the symbol',
      prompt: `Which symbol makes the statement true: ${a} __ ${b}?`,
      correct,
      wrong: [
        ['=', 'These numbers are not equal.', 'Compare the tens first, then the ones.'],
        [correct === '<' ? '>' : '<', 'That reverses the comparison.', 'Use place value to decide which number is greater.'],
        ['+', 'You need a comparison symbol, not an operation.', 'Choose <, >, or =.'],
      ],
    })
  })

  ;[
    ['cm', 'pencil'],
    ['m', 'rope across a room'],
    ['kg', 'bag of rice'],
    ['L', 'bucket of water'],
    ['cm', 'crayon'],
  ].forEach(([unit, item]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Measurement',
      title: 'Pick the unit',
      prompt: `Which unit makes the most sense for measuring a ${item}?`,
      correct: unit,
      wrong: [
        ['hours', 'Time units do not fit a length or amount measurement.', 'Match the unit to the thing being measured.'],
        ['degrees', 'That is usually used for angle or temperature, not this item.', 'Choose a unit that belongs to the measurement type.'],
        ['pages', 'That is not a measurement unit for this object.', 'Use a standard metric unit.'],
      ],
    })
  })

  ;[
    [18, 10],
    [25, 20],
    [39, 30],
    [44, 40],
    [67, 60],
  ].forEach(([number, rounded]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Nearest ten',
      title: 'Round the number',
      prompt: `Which ten is ${number} closest to?`,
      correct: String(rounded + (number % 10 >= 5 ? 10 : 0)),
      wrong: numericWrong(rounded + (number % 10 >= 5 ? 10 : 0), [rounded, number, rounded + 20]),
    })
  })

  return buildCourse('Primary', definitions)
}

function buildTemplateCourse(
  topic: Topic,
  baseId: number,
  chapter: string,
  title: string,
  prompts: Array<{
    prompt: string
    correct: string
    wrong: string[][]
  }>,
): Question[] {
  return buildCourse(
    topic,
    prompts.map((entry, index) => ({
      id: baseId + index,
      chapter,
      title: `${title} ${index + 1}`,
      prompt: entry.prompt,
      correct: entry.correct,
      wrong: entry.wrong as [string, string, string][],
    })),
  )
}

export function makeIndiaClass7MathQuiz(): Question[] {
  const prompts = [
    ...[
      [3, 5, '3/5'],
      [4, 9, '4/9'],
      [7, 8, '7/8'],
      [5, 6, '5/6'],
      [9, 10, '9/10'],
    ].map((entry) => {
      const [a, b, correct] = entry as [number, number, string]
      return {
      prompt: `Which fraction is greater than 1/2: ${correct}, ${a}/${b + 2}, ${a - 1}/${b}, or 2/7?`,
      correct: String(correct),
      wrong: fractionWrong(String(correct), [`${a}/${b + 2}`, `${a - 1}/${b}`, '2/7']),
    }}),
    ...[
      [18, 6, 3],
      [28, 7, 4],
      [45, 9, 5],
      [42, 6, 7],
      [63, 9, 7],
    ].map(([a, b, correct]) => ({
      prompt: `What is ${a} ÷ ${b}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [b, correct + 2, correct - 1]),
    })),
    ...[
      [7, -3, 4],
      [-8, -5, -13],
      [12, -9, 3],
      [-14, 6, -8],
      [5, -11, -6],
    ].map(([a, b, correct]) => ({
      prompt: `What is ${a} + (${b})?`,
      correct: String(correct),
      wrong: numericWrong(correct, [Math.abs(a + b), a - b, b - a]),
    })),
    ...[
      [3, 2, 11],
      [5, 4, 19],
      [6, 3, 21],
      [8, 1, 25],
      [7, 5, 26],
    ].map(([x, add, value]) => ({
      prompt: `If 3x + ${add} = ${value}, what is x?`,
      correct: String(x),
      wrong: numericWrong(x, [value - add, Math.floor((value - add) / 2), x + 1]),
    })),
    ...[
      [12, 8, 40],
      [9, 5, 28],
      [15, 11, 52],
      [14, 10, 48],
      [18, 7, 50],
    ].map(([l, w, correct]) => ({
      prompt: `A rectangle has length ${l} cm and width ${w} cm. What is its perimeter?`,
      correct: String(correct),
      wrong: numericWrong(correct, [l * w, l + w, 2 * l + w]),
    })),
    ...[
      [2, 3, 5, 6],
      [4, 5, 9, 10],
      [3, 7, 10, 21],
      [6, 2, 8, 12],
      [5, 8, 13, 40],
    ].map(([a, b, sum, product]) => ({
      prompt: `Two numbers are ${a} and ${b}. Which statement is true?`,
      correct: `Their sum is ${sum}`,
      wrong: [
        [`Their product is ${sum}`, 'That confuses addition and multiplication.', `Their sum is ${sum}, while their product is ${product}.`],
        [`Their difference is ${sum}`, 'That is not the subtraction result.', 'Check each operation directly.'],
        [`They are equal`, 'The two numbers are different.', 'Read both numbers before deciding.'],
      ],
    })),
    ...[
      [10, 25],
      [8, 20],
      [14, 35],
      [16, 40],
      [12, 30],
    ].map(([part, whole]) => ({
      prompt: `${part} out of ${whole} marbles are blue. What fraction of the marbles are blue in simplest form?`,
      correct: '2/5',
      wrong: fractionWrong('2/5', [`${part}/${whole}`, '1/5', '5/2']),
    })),
    ...[
      [14, 4, 3.5],
      [21, 6, 3.5],
      [12, 8, 1.5],
      [27, 9, 3],
      [35, 10, 3.5],
    ].map(([d, t, correct]) => ({
      prompt: `A swimmer travels ${d} meters in ${t} seconds. What is the unit rate in meters per second?`,
      correct: String(correct),
      wrong: [
        ['0.5', 'That divides incorrectly.', 'Use distance divided by time.'],
        ['7', 'That ignores the time properly.', 'A unit rate is for one second, not total distance.'],
        [String(d + t), 'That adds instead of dividing.', 'Rates come from division.'],
      ],
    })),
    ...[
      [45, 'acute'],
      [90, 'right'],
      [120, 'obtuse'],
      [30, 'acute'],
      [135, 'obtuse'],
    ].map(([angle, correct]) => ({
      prompt: `An angle measures ${angle}°. What kind of angle is it?`,
      correct: String(correct),
      wrong: [
        ['straight', 'A straight angle is 180°.', 'Compare the angle to the benchmark values 90° and 180°.'],
        ['reflex', 'A reflex angle is greater than 180°.', 'This angle is much smaller than that.'],
        ['equilateral', 'That describes a triangle, not a single angle type.', 'Use the vocabulary for angle sizes.'],
      ],
    })),
    ...[
      [11, 13, 17, 13],
      [22, 18, 16, 18],
      [5, 7, 9, 7],
      [30, 26, 28, 28],
      [14, 12, 20, 14],
    ].map(([a, b, c, median]) => ({
      prompt: `What is the median of the numbers ${a}, ${b}, and ${c}?`,
      correct: String(median),
      wrong: numericWrong(median, [a, c, a + b + c]),
    })),
  ]

  return buildTemplateCourse('Mathematics', 30201, 'Class 7 Math', 'Class 7 skill check', prompts)
}

export function makeIndiaClass8MathQuiz(): Question[] {
  const prompts = [
    ...[
      [2, 3, 7],
      [5, 4, 14],
      [3, 6, 12],
      [7, 2, 11],
      [8, 5, 21],
    ].map(([m, x, correct]) => ({
      prompt: `What is the value of ${m}x + 1 when x = ${x}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [m + x + 1, m * (x + 1), correct - 1]),
    })),
    ...[
      [5, 15],
      [7, 21],
      [9, 27],
      [11, 33],
      [13, 39],
    ].map(([x, y]) => ({
      prompt: `A line passes through the origin and the point (${x}, ${y}). What is its slope?`,
      correct: '3',
      wrong: numericWrong(3, [x, y, 1]),
    })),
    ...[
      [2, 5, 32],
      [3, 4, 81],
      [5, 3, 125],
      [4, 2, 16],
      [10, 2, 100],
    ].map(([base, power, correct]) => ({
      prompt: `What is ${base}^${power}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [base * power, base + power, correct - base]),
    })),
    ...[
      [3, 4, 5],
      [5, 12, 13],
      [8, 15, 17],
      [7, 24, 25],
      [9, 12, 15],
    ].map(([a, b, hyp]) => ({
      prompt: `A right triangle has legs ${a} and ${b}. What is the length of the hypotenuse?`,
      correct: String(hyp),
      wrong: numericWrong(hyp, [a + b, b - a, a * b]),
    })),
    ...[
      ['translation', 'slid straight without turning'],
      ['rotation', 'turned around a fixed point'],
      ['reflection', 'flipped across a line'],
      ['translation', 'moved the same distance in one direction'],
      ['rotation', 'spun around a center'],
    ].map(([correct, clue]) => ({
      prompt: `Which transformation is described here: a shape is ${clue}?`,
      correct: String(correct),
      wrong: [
        ['dilation', 'Dilation changes size, not this movement.', 'Look for whether the shape slides, turns, or flips.'],
        ['none of these', 'The description clearly names a standard transformation.', 'Match the motion to the transformation vocabulary.'],
        ['perimeter', 'That is a measurement, not a transformation.', 'Choose the geometric move.'],
      ],
    })),
    ...[
      [20, 5, 4],
      [36, 9, 4],
      [49, 7, 7],
      [64, 8, 8],
      [81, 9, 9],
    ].map(([area, side, correct]) => ({
      prompt: `A square has area ${area} square units. What is the side length?`,
      correct: String(correct),
      wrong: numericWrong(correct, [side + 1, Math.floor(area / 2), area]),
    })),
    ...[
      [3, 2, 6],
      [5, 4, 20],
      [7, 3, 21],
      [8, 5, 40],
      [9, 6, 54],
    ].map(([a, b, correct]) => ({
      prompt: `What is the value of ${a}(${b})?`,
      correct: String(correct),
      wrong: numericWrong(correct, [a + b, correct - a, b]),
    })),
    ...[
      [14, 6, 8],
      [20, 9, 11],
      [17, 5, 12],
      [25, 13, 12],
      [31, 14, 17],
    ].map(([a, b, correct]) => ({
      prompt: `Solve: x + ${b} = ${a}. What is x?`,
      correct: String(correct),
      wrong: numericWrong(correct, [a + b, b - a, a]),
    })),
    ...[
      [4, 6, 24],
      [7, 5, 35],
      [9, 3, 27],
      [8, 8, 64],
      [12, 4, 48],
    ].map(([l, w, correct]) => ({
      prompt: `What is the area of a rectangle with side lengths ${l} and ${w}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [2 * (l + w), l + w, correct - l]),
    })),
    ...[
      [12, 14, 16, 14],
      [21, 25, 19, 21],
      [8, 10, 12, 10],
      [31, 29, 35, 31],
      [40, 34, 38, 38],
    ].map(([a, b, c, mean]) => ({
      prompt: `What is the mean of ${a}, ${b}, and ${c}?`,
      correct: String(mean),
      wrong: numericWrong(mean, [b, a + b + c, c - a]),
    })),
  ]

  return buildTemplateCourse('Mathematics', 30301, 'Class 8 Math', 'Class 8 skill check', prompts)
}

export function makeIndiaClass9MathQuiz(): Question[] {
  const prompts = [
    ...[
      ['x^2 + 5x + 6', '(x + 2)(x + 3)', ['(x + 1)(x + 6)', '(x - 2)(x - 3)', '(x + 2)(x - 3)']],
      ['x^2 + 7x + 12', '(x + 3)(x + 4)', ['(x + 2)(x + 6)', '(x - 3)(x - 4)', '(x + 1)(x + 12)']],
      ['x^2 + 9x + 20', '(x + 4)(x + 5)', ['(x + 2)(x + 10)', '(x - 4)(x - 5)', '(x + 1)(x + 20)']],
      ['x^2 + 8x + 15', '(x + 3)(x + 5)', ['(x + 1)(x + 15)', '(x - 3)(x - 5)', '(x + 2)(x + 7)']],
      ['x^2 + 6x + 8', '(x + 2)(x + 4)', ['(x + 1)(x + 8)', '(x - 2)(x - 4)', '(x + 3)(x + 3)']],
    ].map((entry) => {
      const [expr, correct, wrongs] = entry as [string, string, string[]]
      return {
      prompt: `Which is the correct factorization of ${expr}?`,
      correct: String(correct),
      wrong: wrongs.map((value): [string, string, string] => [String(value), 'That factorization does not expand back to the original quadratic.', 'Expand the factors and check both the middle term and the constant.']),
    }}),
    ...[
      [3, 5, 11],
      [4, 7, 15],
      [6, 8, 22],
      [7, 3, 17],
      [9, 6, 24],
    ].map(([x, y, total]) => ({
      prompt: `What is the solution to the system x + y = ${total} and x - y = ${x - y}?`,
      correct: `(${x}, ${y})`,
      wrong: [
        [`(${y}, ${x})`, 'That swaps the coordinates.', 'Check which number is x and which is y.'],
        [`(${total}, ${x - y})`, 'Those are equation values, not the ordered pair solution.', 'Solve for the variables themselves.'],
        [`(${x + 1}, ${y - 1})`, 'That pair does not satisfy both equations.', 'Substitute the pair into both equations to verify.'],
      ],
    })),
    ...[
      [2, -3, -6],
      [-4, 5, -20],
      [7, -2, -14],
      [-6, -3, 18],
      [9, 4, 36],
    ].map(([a, b, correct]) => ({
      prompt: `What is ${a} × ${b}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [Math.abs(correct), a + b, a - b]),
    })),
    ...[
      [5, 4, 41],
      [6, 3, 45],
      [8, 2, 68],
      [4, 7, 65],
      [9, 1, 82],
    ].map(([x, add, value]) => ({
      prompt: `If x^2 + ${add} = ${value}, what is the positive value of x?`,
      correct: String(x),
      wrong: numericWrong(x, [value - add, Math.floor(Math.sqrt(value)), x + 2]),
    })),
    ...[
      [2, 1, 5],
      [3, 4, 13],
      [4, 2, 10],
      [5, 3, 13],
      [6, 1, 8],
    ].map(([x, y, correct]) => ({
      prompt: `Point (${x}, ${y}) lies in the coordinate plane. What is x + y?`,
      correct: String(correct),
      wrong: numericWrong(correct, [x * y, x - y, y - x]),
    })),
    ...[
      [18, 3, 6],
      [32, 4, 8],
      [45, 5, 9],
      [56, 7, 8],
      [63, 9, 7],
    ].map(([a, b, correct]) => ({
      prompt: `What is the greatest common factor of ${a} and ${b * correct}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [a, b, b * correct]),
    })),
    ...[
      [2, 3, 6],
      [4, 5, 20],
      [7, 2, 14],
      [8, 3, 24],
      [9, 4, 36],
    ].map(([a, b, correct]) => ({
      prompt: `What is the value of ${a}y if y = ${b}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [a + b, b, correct + a]),
    })),
    ...[
      [12, 16, 20],
      [6, 8, 10],
      [9, 12, 15],
      [15, 20, 25],
      [18, 24, 30],
    ].map(([a, b, hyp]) => ({
      prompt: `Which number completes the Pythagorean triple ${a}, ${b}, __ ?`,
      correct: String(hyp),
      wrong: numericWrong(hyp, [a + b, b - a, a * b]),
    })),
    ...[
      [3, 4, 12],
      [5, 6, 30],
      [7, 2, 14],
      [8, 5, 40],
      [9, 3, 27],
    ].map(([a, b, correct]) => ({
      prompt: `What is the area of a parallelogram with base ${a} and height ${b}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [2 * (a + b), a + b, correct - a]),
    })),
    ...[
      [1, 3, 7],
      [2, 4, 10],
      [5, 2, 9],
      [4, 6, 16],
      [7, 5, 17],
    ].map(([x, m, b]) => ({
      prompt: `If y = ${m}x + ${b - m * x}, what is y when x = ${x}?`,
      correct: String(b),
      wrong: numericWrong(b, [m + x, b - 1, m * x]),
    })),
  ]

  return buildTemplateCourse('Mathematics', 30401, 'Class 9 Math', 'Class 9 skill check', prompts)
}

export function makeIndiaClass10MathQuiz(): Question[] {
  const prompts = [
    ...[
      [1, -5, 6, 'x = 2 and x = 3'],
      [1, -7, 12, 'x = 3 and x = 4'],
      [1, -9, 20, 'x = 4 and x = 5'],
      [1, -6, 8, 'x = 2 and x = 4'],
      [1, -8, 15, 'x = 3 and x = 5'],
    ].map((entry) => {
      const [, b, c, correct] = entry as [number, number, number, string]
      return {
      prompt: `What are the solutions of x^2 ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x + ${c} = 0?`,
      correct: String(correct),
      wrong: [
        ['x = 1 and x = 6', 'Those values multiply correctly only in some cases and do not match the middle term.', 'Look for two numbers that multiply to the constant and add to the coefficient of x.'],
        ['x = -2 and x = -3', 'The signs do not match the equation.', 'Check the sign pattern in the factors.'],
        ['There is only one solution', 'These quadratics factor into two distinct linear factors.', 'A factored quadratic can give two roots.'],
      ],
    }}),
    ...[
      [3, 4, 'sin', '4/5'],
      [5, 12, 'sin', '12/13'],
      [8, 15, 'cos', '8/17'],
      [7, 24, 'tan', '24/7'],
      [9, 12, 'cos', '3/5'],
    ].map(([a, b, fn, correct]) => ({
      prompt: `In a right triangle with legs ${a} and ${b}, what is ${fn} of the acute angle opposite the side of length ${b}?`,
      correct: String(correct),
      wrong: fractionWrong(String(correct), ['1/2', '5/4', '7/24']),
    })),
    ...[
      [7, 154],
      [5, 78.5],
      [10, 314],
      [3, 28.26],
      [12, 452.16],
    ].map(([r, correct]) => ({
      prompt: `Using π ≈ 3.14, what is the area of a circle with radius ${r}?`,
      correct: String(correct),
      wrong: numericWrong(Number(correct), [Math.round(2 * 3.14 * Number(r)), Number(r) * Number(r), Number(r) + 3]),
    })),
    ...[
      [2, 3, 6],
      [4, 5, 20],
      [6, 7, 42],
      [8, 2, 16],
      [9, 3, 27],
    ].map(([a, b, correct]) => ({
      prompt: `What is the product of the roots of the quadratic (x - ${a})(x - ${b}) = 0?`,
      correct: String(correct),
      wrong: numericWrong(correct, [a + b, Math.abs(a - b), a]),
    })),
    ...[
      [10, 24, 26],
      [6, 8, 10],
      [12, 16, 20],
      [9, 12, 15],
      [5, 12, 13],
    ].map(([a, b, hyp]) => ({
      prompt: `A ladder reaches ${b} meters up a wall and is ${hyp} meters long. How far is the base of the ladder from the wall?`,
      correct: String(a),
      wrong: numericWrong(a, [b, hyp, hyp - a]),
    })),
    ...[
      [30, 12, 42],
      [40, 18, 58],
      [25, 11, 36],
      [50, 24, 74],
      [35, 16, 51],
    ].map(([inside, outside, correct]) => ({
      prompt: `An angle inside a polygon is ${inside}°. Its exterior angle is ${outside}°. What is their sum?`,
      correct: String(correct),
      wrong: numericWrong(correct, [inside, outside, inside - outside]),
    })),
    ...[
      [4, 6, 24],
      [7, 8, 56],
      [9, 5, 45],
      [12, 3, 36],
      [15, 4, 60],
    ].map(([base, height, correct]) => ({
      prompt: `What is the area of a triangle with base ${base} and height ${height}?`,
      correct: String(correct / 2),
      wrong: numericWrong(correct / 2, [correct, base + height, height]),
    })),
    ...[
      [15, 21, 18],
      [9, 12, 10.5],
      [20, 30, 25],
      [7, 11, 9],
      [14, 26, 20],
    ].map(([a, b, correct]) => ({
      prompt: `What is the arithmetic mean of ${a} and ${b}?`,
      correct: String(correct),
      wrong: [
        [String(a + b), 'That adds the numbers but does not divide by 2.', 'The mean of two numbers is their sum divided by 2.'],
        [String(Math.abs(a - b)), 'That is the difference, not the average.', 'Average sits between the two values.'],
        [String(a), 'The mean is not just the first number.', 'Use both values in the calculation.'],
      ],
    })),
    ...[
      [3, 2, 18],
      [4, 3, 64],
      [5, 2, 50],
      [6, 2, 72],
      [7, 3, 343],
    ].map(([r, exp, correct]) => ({
      prompt: `What is the value of ${r}^${exp}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [r * exp, r + exp, correct - r]),
    })),
    ...[
      [2, 6, 12],
      [3, 7, 21],
      [4, 5, 20],
      [6, 8, 48],
      [9, 4, 36],
    ].map(([x, y]) => ({
      prompt: `A point (${x}, ${y}) is reflected in the x-axis. What is the new y-coordinate?`,
      correct: String(-y),
      wrong: numericWrong(-y, [y, x, x + y]),
    })),
  ]

  return buildTemplateCourse('Mathematics', 30501, 'Class 10 Math', 'Class 10 skill check', prompts)
}

export function makeIndiaClass11MathQuiz(): Question[] {
  const prompts = [
    ...[
      [2, 5],
      [3, 10],
      [4, 17],
      [5, 26],
      [6, 37],
    ].map(([x, correct]) => ({
      prompt: `If f(x) = x^2 + 1, what is f(${x})?`,
      correct: String(correct),
      wrong: numericWrong(correct, [x + 1, x * 2, correct - 1]),
    })),
    ...[
      [1, 3, 5, 7, 9, 11],
      [4, 7, 10, 13, 16, 19],
      [2, 6, 10, 14, 18, 22],
      [5, 8, 11, 14, 17, 20],
      [9, 12, 15, 18, 21, 24],
    ].map((sequence) => ({
      prompt: `What is the next term in the arithmetic sequence ${sequence.slice(0, 5).join(', ')}?`,
      correct: String(sequence[5]),
      wrong: numericWrong(sequence[5], [sequence[4] + 1, sequence[4] + 2, sequence[4] * 2]),
    })),
    ...[
      [5, 2, 10],
      [6, 3, 20],
      [7, 2, 21],
      [8, 4, 70],
      [10, 2, 45],
    ].map(([n, r, correct]) => ({
      prompt: `How many combinations of ${r} items can be chosen from ${n} items?`,
      correct: String(correct),
      wrong: numericWrong(correct, [n * r, n + r, correct + r]),
    })),
    ...[
      ['sin 30°', '1/2'],
      ['cos 60°', '1/2'],
      ['sin 90°', '1'],
      ['cos 0°', '1'],
      ['tan 45°', '1'],
    ].map(([expr, correct]) => ({
      prompt: `What is the exact value of ${expr}?`,
      correct: String(correct),
      wrong: fractionWrong(String(correct), ['0', '2', '3/2']),
    })),
    ...[
      ['2x + 3', 'x', '2'],
      ['5x - 1', 'x', '5'],
      ['x^2', 'x', '2x'],
      ['7x + 4', 'x', '7'],
      ['9x - 6', 'x', '9'],
    ].map(([expr, variable, correct]) => ({
      prompt: `What is the derivative of ${expr} with respect to ${variable}?`,
      correct: String(correct),
      wrong: [
        ['x', 'That ignores the constant rate or power rule.', 'Differentiate term by term and use the correct derivative rule.'],
        ['0', 'These expressions are not constants.', 'Only constant terms differentiate to zero.'],
        ['1', 'That works only for the derivative of x itself.', 'Look at the coefficient or exponent carefully.'],
      ],
    })),
    ...[
      [0.25, '25%'],
      [0.4, '40%'],
      [0.75, '75%'],
      [0.6, '60%'],
      [0.12, '12%'],
    ].map(([decimal, correct]) => ({
      prompt: `Convert ${decimal} to a percentage.`,
      correct: String(correct),
      wrong: [
        [`${decimal}%`, 'That leaves the decimal unchanged instead of scaling by 100.', 'Move from decimal to percent by multiplying by 100.'],
        [`${Number(decimal) * 10}%`, 'That uses the wrong scale factor.', 'Percent means per hundred, not per ten.'],
        [`${Number(decimal) * 1000}%`, 'That overshoots by a factor of 10.', 'Use exactly 100 as the conversion factor.'],
      ],
    })),
    ...[
      [2, 3, 5],
      [4, 6, 10],
      [5, 8, 13],
      [7, 9, 16],
      [10, 11, 21],
    ].map(([a, b, correct]) => ({
      prompt: `If two events are mutually exclusive with probabilities ${a}/20 and ${b}/20, what is the probability that one or the other happens?`,
      correct: `${correct}/20`,
      wrong: fractionWrong(`${correct}/20`, [`${a * b}/20`, `${Math.abs(a - b)}/20`, `${a + b}/10`]),
    })),
    ...[
      [2, 4, 8],
      [3, 5, 15],
      [6, 7, 42],
      [8, 9, 72],
      [10, 12, 120],
    ].map(([x, y, correct]) => ({
      prompt: `What is the determinant of the 2x2 matrix [[${x}, 0], [0, ${y}]]?`,
      correct: String(correct),
      wrong: numericWrong(correct, [x + y, y - x, x]),
    })),
    ...[
      ['odd', '2n + 1'],
      ['even', '2n'],
      ['multiple of 3', '3n'],
      ['odd', '2n + 1'],
      ['even', '2n'],
    ].map(([description, correct]) => ({
      prompt: `Which algebraic form can represent any ${description} integer?`,
      correct: String(correct),
      wrong: [
        ['n/2', 'That does not describe the set of integers of this type.', 'Use a form that works for every example in the set.'],
        ['n + 1/2', 'That is not guaranteed to stay an integer.', 'The form should always produce an integer.'],
        ['n^2', 'That gives only square numbers, not the whole set.', 'Match the structure to the number pattern.'],
      ],
    })),
    ...[
      [3, 5, 8],
      [7, 4, 11],
      [9, 6, 15],
      [11, 8, 19],
      [13, 9, 22],
    ].map(([x, y, correct]) => ({
      prompt: `A vector has components (${x}, ${y}). What is the sum of its components?`,
      correct: String(correct),
      wrong: numericWrong(correct, [x * y, y - x, x]),
    })),
  ]

  return buildTemplateCourse('Mathematics', 30601, 'Class 11 Math', 'Class 11 skill check', prompts)
}

export function makeIndiaClass12MathQuiz(): Question[] {
  const prompts = [
    ...[
      ['x^2', '2x'],
      ['x^3', '3x^2'],
      ['5x', '5'],
      ['7x^4', '28x^3'],
      ['9', '0'],
    ].map(([expr, correct]) => ({
      prompt: `What is the derivative of ${expr}?`,
      correct: String(correct),
      wrong: [
        ['x', 'That is not the correct power-rule result.', 'Use d/dx of x^n = nx^(n-1).'],
        ['1', 'That only works for x itself.', 'Check the exponent and coefficient.'],
        ['0', 'Only constants differentiate to zero.', 'This expression changes with x unless it is constant.'],
      ],
    })),
    ...[
      ['2x', 'x^2 + C'],
      ['6x^2', '2x^3 + C'],
      ['5', '5x + C'],
      ['8x^3', '2x^4 + C'],
      ['3x^2', 'x^3 + C'],
    ].map(([expr, correct]) => ({
      prompt: `What is an antiderivative of ${expr}?`,
      correct: String(correct),
      wrong: [
        ['x + C', 'That does not differentiate back to the given expression.', 'Check by differentiating your answer.'],
        ['0', 'A nonzero function does not have zero as an antiderivative.', 'An antiderivative must change when differentiated.'],
        ['The same expression', 'Differentiation and integration are inverse ideas, not identical moves.', 'Reverse the power rule.'],
      ],
    })),
    ...[
      [2, 3, 6],
      [4, 5, 20],
      [6, 7, 42],
      [8, 9, 72],
      [10, 11, 110],
    ].map(([a, b, correct]) => ({
      prompt: `What is the determinant of [[${a}, 0], [0, ${b}]]?`,
      correct: String(correct),
      wrong: numericWrong(correct, [a + b, b - a, a]),
    })),
    ...[
      ['1/6', 'fair die shows a 1'],
      ['1/2', 'a fair coin lands heads'],
      ['1/4', 'two fair coins both land heads'],
      ['1/3', 'one outcome out of three equally likely outcomes happens'],
      ['1', 'an event is certain'],
    ].map(([correct, description]) => ({
      prompt: `Which probability matches this event: ${description}?`,
      correct: String(correct),
      wrong: fractionWrong(String(correct), ['0', '2/3', '5/6']),
    })),
    ...[
      [3, 4, 5],
      [5, 12, 13],
      [8, 15, 17],
      [7, 24, 25],
      [9, 40, 41],
    ].map(([a, b, hyp]) => ({
      prompt: `For a right triangle with legs ${a} and ${b}, what is the hypotenuse?`,
      correct: String(hyp),
      wrong: numericWrong(hyp, [a + b, b - a, a * b]),
    })),
    ...[
      ['x^2 - 4', '2'],
      ['x^2 - 9', '3'],
      ['x^2 - 16', '4'],
      ['x^2 - 25', '5'],
      ['x^2 - 36', '6'],
    ].map(([expr, correct]) => ({
      prompt: `What is the positive root of ${expr} = 0?`,
      correct: String(correct),
      wrong: numericWrong(Number(correct), [Number(correct) + 1, Number(correct) - 1, Number(correct) * 2]),
    })),
    ...[
      [10, 40],
      [25, 100],
      [15, 60],
      [12, 48],
      [18, 72],
    ].map(([part, whole]) => ({
      prompt: `${part} is what percent of ${whole}?`,
      correct: `${(part / whole) * 100}%`,
      wrong: [
        [`${part}%`, 'That treats the part as if it were already out of 100.', 'Convert the fraction part/whole into a percentage.'],
        [`${whole}%`, 'That uses the whole rather than the ratio.', 'Percent describes the share, not the total.'],
        [`${(whole / part) * 100}%`, 'That inverts the ratio.', 'Use part divided by whole, not whole divided by part.'],
      ],
    })),
    ...[
      [2, 6, 8],
      [3, 7, 10],
      [4, 9, 13],
      [5, 11, 16],
      [6, 13, 19],
    ].map(([a, b, correct]) => ({
      prompt: `If f(x) = ${a}x + ${b - a}, what is f(1)?`,
      correct: String(correct),
      wrong: numericWrong(correct, [a + b, b, a]),
    })),
    ...[
      [3, 5, 15],
      [4, 6, 24],
      [7, 8, 56],
      [9, 2, 18],
      [10, 12, 120],
    ].map(([a, b, correct]) => ({
      prompt: `What is the product of ${a} and ${b}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [a + b, b - a, a]),
    })),
    ...[
      [1, 4, 7, 4],
      [2, 6, 10, 6],
      [3, 8, 13, 8],
      [5, 9, 14, 9],
      [7, 11, 17, 11],
    ].map(([a, b, c, middle]) => ({
      prompt: `What is the median of ${a}, ${b}, and ${c}?`,
      correct: String(middle),
      wrong: numericWrong(middle, [a, c, a + b + c]),
    })),
  ]

  return buildTemplateCourse('Mathematics', 30701, 'Class 12 Math', 'Class 12 skill check', prompts)
}

export function makeEurekaMathFoundations38Quiz(): Question[] {
  const prompts = [
    ...[
      ['place value', 'Which digit is in the hundreds place in 472?', '4'],
      ['place value', 'Which digit is in the tens place in 658?', '5'],
      ['addition', 'What is 47 + 26?', '73'],
      ['subtraction', 'What is 91 - 37?', '54'],
      ['multiplication', 'What is 6 × 8?', '48'],
      ['division', 'What is 42 ÷ 6?', '7'],
      ['fraction comparison', 'Which is larger: 2/3 or 3/5?', '2/3'],
      ['decimal place value', 'Which number is greater: 0.8 or 0.75?', '0.8'],
      ['area', 'What is the area of a rectangle with sides 7 and 3?', '21'],
      ['perimeter', 'What is the perimeter of a rectangle with sides 9 and 4?', '26'],
      ['ratio', 'If 2 pencils cost $6, how much do 4 pencils cost at the same rate?', '$12'],
      ['negative numbers', 'What is -5 + 9?', '4'],
      ['expression', 'If x = 3, what is 2x + 5?', '11'],
      ['equation', 'Solve x + 8 = 15.', '7'],
      ['graph', 'A line crosses the y-axis at 2 and rises 1 for every 1 right. Which equation fits?', 'y = x + 2'],
      ['fraction addition', 'What is 1/4 + 1/2?', '3/4'],
      ['decimal addition', 'What is 2.5 + 1.3?', '3.8'],
      ['measurement', 'How many centimeters are in 2 meters?', '200'],
      ['volume', 'What is the volume of a box 3 by 2 by 4?', '24'],
      ['mean', 'What is the mean of 4, 6, and 8?', '6'],
    ].flatMap(([, prompt, correct], index) =>
      Array.from({ length: index < 10 ? 3 : 2 }, () => ({
        prompt: String(prompt),
        correct: String(correct),
        wrong: [
          [String(correct).includes('/') ? '1/2' : String(Number(correct) + 1 || correct), 'That misses the arithmetic or comparison rule.', 'Work the problem carefully rather than choosing the nearest-looking value.'],
          [String(correct).includes('/') ? '2/4' : String(Number(correct) - 1 || correct), 'That is a common near miss but not the actual result.', 'Check each step of the calculation.'],
          ['Not enough information', 'This problem gives enough information to solve directly.', 'Use the quantities given in the prompt.'],
        ] as [string, string, string][],
      })),
    ),
  ].slice(0, 50)

  return buildTemplateCourse('Mathematics', 30801, 'Eureka Math Foundations 3rd–8th grade', 'Foundation skill check', prompts)
}

export function makeEurekaMath38Quiz(): Question[] {
  const prompts = [
    'What is 3/4 of 20?',
    'What is 0.6 × 50?',
    'Solve 5x = 35.',
    'What is the area of a triangle with base 10 and height 6?',
    'What is the unit rate if 24 miles are traveled in 3 hours?',
    'What is -7 + 12?',
    'What is the perimeter of a square with side length 8?',
    'Which fraction is equivalent to 6/8?',
    'What is 15% of 200?',
    'Solve x/4 = 9.',
  ].flatMap((prompt, group) =>
    Array.from({ length: 5 }, () => {
      const bank = [
        { correct: '15', wrong: numericWrong(15, [12, 17, 80]) },
        { correct: '30', wrong: numericWrong(30, [3, 56, 20]) },
        { correct: '7', wrong: numericWrong(7, [40, 30, 5]) },
        { correct: '30', wrong: numericWrong(30, [60, 16, 20]) },
        { correct: '8 miles per hour', wrong: [['72 mph', 'That multiplies instead of dividing.', 'Unit rate means per one hour.'], ['3 mph', 'That picks the time, not the rate.', 'Divide miles by hours.'], ['21 mph', 'That adds instead of dividing.', 'Rates come from division.']] },
        { correct: '5', wrong: numericWrong(5, [19, -5, 12]) },
        { correct: '32', wrong: numericWrong(32, [64, 16, 8]) },
        { correct: '3/4', wrong: fractionWrong('3/4', ['6/16', '2/3', '8/6']) },
        { correct: '30', wrong: numericWrong(30, [15, 40, 200]) },
        { correct: '36', wrong: numericWrong(36, [13, 5, 45]) },
      ][group]

      return {
        prompt,
        correct: bank.correct,
        wrong: bank.wrong,
      }
    }),
  )

  return buildTemplateCourse('Mathematics', 30901, 'Eureka Math 3rd–8th grade', 'Mixed Eureka skill check', prompts)
}

export function makeIllustrativeMath678Quiz(): Question[] {
  const prompts = [
    ...[
      ['A recipe uses 3 cups of flour for 2 cakes. How many cups are needed for 6 cakes?', '9'],
      ['A tank loses 4 liters of water each minute. What is the change after 7 minutes?', '-28 liters'],
      ['What is 5/6 + 1/3?', '7/6'],
      ['If y = 4x - 3, what is y when x = 5?', '17'],
      ['Solve 2x + 9 = 25.', '8'],
      ['A rectangular prism measures 3 by 4 by 5. What is its volume?', '60'],
      ['What is the area of a triangle with base 12 and height 9?', '54'],
      ['Which point is on the line y = x + 2?', '(3, 5)'],
      ['What is the mean of 8, 10, and 12?', '10'],
      ['What is the distance between 0 and -7 on a number line?', '7'],
    ].flatMap(([prompt, correct]) =>
      Array.from({ length: 5 }, () => ({
        prompt: String(prompt),
        correct: String(correct),
        wrong: [
          [String(correct).includes('/') ? '1/2' : 'Not enough information', 'That ignores the information the question actually gives.', 'Use the numbers and relationship in the prompt directly.'],
          ['0', 'That erases the relationship instead of solving it.', 'Work the quantity step by step.'],
          ['A nearby but wrong value', 'That is a tempting near miss but not the actual result.', 'Recalculate carefully and check units where relevant.'],
        ] as [string, string, string][],
      })),
    ),
  ].slice(0, 50)

  return buildTemplateCourse('Mathematics', 31001, 'Illustrative Mathematics 6th–8th grade', 'Illustrative skill check', prompts)
}

export function makeHighSchoolBiologyNGSSQuiz(): Question[] {
  const prompts = [
    ...[
      ['Which organelle is most associated with ATP production in eukaryotic cells?', 'Mitochondria'],
      ['What is the role of ribosomes?', 'They build proteins'],
      ['In photosynthesis, plants use sunlight mainly to:', 'Convert carbon dioxide and water into sugars'],
      ['What is a gene?', 'A segment of DNA that carries instructions for a trait or product'],
      ['What process produces body cells for growth and repair?', 'Mitosis'],
      ['Why does biodiversity matter in an ecosystem?', 'It helps ecosystems stay resilient when conditions change'],
      ['What is natural selection?', 'Inherited traits that improve survival or reproduction become more common over time'],
      ['What is homeostasis?', 'Maintaining stable internal conditions'],
      ['In a food web, an herbivore is a:', 'Consumer that eats producers'],
      ['What does a Punnett square help predict?', 'Possible inheritance outcomes'],
    ].flatMap(([prompt, correct]) =>
      Array.from({ length: 5 }, () => ({
        prompt: String(prompt),
        correct: String(correct),
        wrong: [
          ['It makes ATP only during storms', 'That does not match the biological process being asked about.', 'Match the structure or idea to its actual function in living systems.'],
          ['A random feature with no clear role', 'Biology structures and concepts have specific roles.', 'Tie the answer to the function or process named in the prompt.'],
          ['The opposite relationship', 'That reverses the biological cause or role.', 'Track which thing does the action and which thing receives it.'],
        ] as [string, string, string][],
      })),
    ),
  ].slice(0, 50)

  return buildTemplateCourse('AP', 31101, 'High school biology - NGSS', 'NGSS biology skill check', prompts)
}

export function makeHighSchoolPhysicsNGSSQuiz(): Question[] {
  const prompts = [
    ...[
      ['What is speed?', 'Distance divided by time'],
      ['If a 2 kg object accelerates at 3 m/s^2, what is the net force?', '6 N'],
      ['What happens to kinetic energy when speed increases?', 'It increases'],
      ['What kind of wave needs a medium to travel?', 'A mechanical wave'],
      ['What is momentum?', 'Mass multiplied by velocity'],
      ['If two equal forces act in opposite directions, the net force is:', '0'],
      ['Which quantity is conserved in an isolated collision?', 'Momentum'],
      ['What does a circuit need in order to keep charge flowing?', 'A complete closed path'],
      ['What happens to the frequency of a wave if more crests pass each second?', 'The frequency increases'],
      ['What is gravitational potential energy most closely tied to?', 'Position in a gravitational field'],
    ].flatMap(([prompt, correct]) =>
      Array.from({ length: 5 }, () => ({
        prompt: String(prompt),
        correct: String(correct),
        wrong: [
          ['It stays mysterious and unknowable', 'Physics names measurable relationships, not mystery placeholders.', 'Match the definition or law to the quantity being asked about.'],
          ['The opposite quantity', 'That answer swaps the physical relationship or direction.', 'Check whether the question asks about force, energy, motion, or circuits.'],
          ['A nearby science term', 'This mixes up related but distinct physics ideas.', 'Use the exact definition that fits the prompt.'],
        ] as [string, string, string][],
      })),
    ),
  ].slice(0, 50)

  return buildTemplateCourse('AP', 31201, 'High school physics - NGSS', 'NGSS physics skill check', prompts)
}

export function makeWorldHistoryOriginsQuiz(): Question[] {
  const prompts = [
    ...[
      ['Why was the development of agriculture a major turning point?', 'It supported permanent settlements and larger populations'],
      ['What do historians usually mean by a civilization?', 'A complex society with organized institutions and shared systems'],
      ['Why were river valleys important to early states?', 'They supported farming, trade, and dense settlement'],
      ['What is one major effect of trade networks?', 'They spread goods, ideas, and technologies between regions'],
      ['How did major belief systems shape societies?', 'They influenced laws, values, and social organization'],
      ['Why did empires build roads and communication systems?', 'To control territory and move people, goods, and information'],
      ['What was a major effect of the Columbian Exchange?', 'Plants, animals, diseases, and goods moved between hemispheres'],
      ['Why did industrialization transform societies?', 'It changed production, labor, cities, and economic power'],
      ['What is nationalism?', 'A strong sense of shared political identity with a nation'],
      ['Why do world historians compare regions?', 'To see patterns, differences, and connections across time'],
    ].flatMap(([prompt, correct]) =>
      Array.from({ length: 5 }, () => ({
        prompt: String(prompt),
        correct: String(correct),
        wrong: [
          ['Because nothing important changed', 'World history focuses on change and continuity, not static conditions.', 'Ask what structural effect the development had on people and societies.'],
          ['Only one ruler felt strongly about it', 'These questions are about broad historical patterns, not one person’s mood.', 'Scale your answer to the level of the historical question.'],
          ['It mattered only in one tiny village forever', 'The prompt asks about a larger world-historical effect.', 'Look for the regional or global consequence.'],
        ] as [string, string, string][],
      })),
    ),
  ].slice(0, 50)

  return buildTemplateCourse('AP', 31301, 'World History Project - Origins to the Present', 'Origins skill check', prompts)
}

export function makeWorldHistory1750Quiz(): Question[] {
  const prompts = [
    ...[
      ['Why is 1750 often used as a starting point in modern world history?', 'Industrialization and accelerating global change gather speed around this era'],
      ['What was a major effect of the Industrial Revolution?', 'Production shifted toward factories and mechanization'],
      ['Why did imperial powers seek colonies in the 1800s?', 'They wanted resources, markets, and strategic control'],
      ['What is nationalism in a nineteenth-century context?', 'A movement linking political power to a shared national identity'],
      ['Why was World War I so destructive?', 'Industrial technology and mass mobilization expanded the scale of warfare'],
      ['What was one major consequence of World War II?', 'Global power shifted and decolonization accelerated'],
      ['What does decolonization mean?', 'Former colonies gained independence from imperial rule'],
      ['Why was the Cold War called “cold”?', 'The superpowers avoided direct large-scale war with each other while competing globally'],
      ['What is globalization?', 'Growing cross-border connections in trade, communication, and culture'],
      ['Why do historians study migration in the modern era?', 'Population movement reshapes labor, cities, culture, and politics'],
    ].flatMap(([prompt, correct]) =>
      Array.from({ length: 5 }, () => ({
        prompt: String(prompt),
        correct: String(correct),
        wrong: [
          ['Because history stopped changing after 1750', 'Modern history starts there because change accelerates, not because change ends.', 'Look for the structural shift that makes the era distinctive.'],
          ['Only because one king wrote it down', 'These explanations are too narrow for world-history questions.', 'Answer at the level of systems, empires, industry, and politics.'],
          ['Because it sounded dramatic', 'Historical periodization needs a substantive reason.', 'Identify the process historians are marking.'],
        ] as [string, string, string][],
      })),
    ),
  ].slice(0, 50)

  return buildTemplateCourse('AP', 31401, 'World History Project - 1750 to the Present', 'Modern world skill check', prompts)
}
