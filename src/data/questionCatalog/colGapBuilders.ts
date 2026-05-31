import { makeQuestionBank } from './base'
import type { Question, Topic } from './types'

type Definition = {
  id: number
  chapter: string
  title: string
  prompt: string
  correct: string
  wrong: [string, string, string][]
  mentorHint?: string
}

type TemplatePrompt = {
  prompt: string
  correct: string
  wrong: string[][]
  mentorHint?: string
}

function buildCourse(topic: Topic, definitions: Definition[]): Question[] {
  return makeQuestionBank(
    topic,
    definitions.map((definition) => ({
      ...definition,
      mentorHint: definition.mentorHint ?? inferMathMentorHint(topic, definition.chapter, definition.title, definition.prompt),
    })),
  )
}

// Helpers now require per-distractor whyWrong (slot 2). The howToFix tip (slot 3)
// is auto-derived from the correct value so it varies per question, but the
// misconception line is always bespoke and never the generic
// DEFAULT_FLAW string that the audit flagged.

function numericWrong(
  correct: number,
  items: Array<[number, string]>,
): [string, string, string][] {
  return items.slice(0, 3).map(([value, whyWrong]) => [
    String(value),
    whyWrong,
    `Re-run the calculation step by step and confirm the result is ${correct}.`,
  ])
}

function fractionWrong(
  correct: string,
  items: Array<[string, string]>,
): [string, string, string][] {
  return items.slice(0, 3).map(([value, whyWrong]) => [
    value,
    whyWrong,
    `Use a common denominator or simplest form and compare with ${correct}.`,
  ])
}

function inferMathMentorHint(topic: Topic, chapter: string, title: string, prompt: string): string | undefined {
  if (topic !== 'Primary' && topic !== 'Mathematics') return undefined

  const text = `${chapter} ${title} ${prompt}`.toLowerCase()

  if (text.includes('derivative')) return 'Use the power rule term by term: bring the exponent down, then reduce the exponent by 1. Constants become 0, and coefficients stay attached.'
  if (text.includes('antiderivative')) return 'Reverse the power rule: raise the exponent by 1 and divide by the new exponent. Remember that an antiderivative family includes a constant.'
  if (text.includes('determinant')) return 'For a diagonal 2 by 2 matrix, multiply the diagonal entries. The zero off-diagonal entries do not get added as separate terms.'
  if (text.includes('combination')) return 'A combination counts selections where order does not matter. Use the choose formula or a short organized list instead of simply multiplying the two numbers.'
  if (text.includes('mutually exclusive') || text.includes('probability')) return 'For mutually exclusive events, the outcomes do not overlap, so the "one or the other" probability comes from adding their separate chances. Keep the sample-space denominator consistent.'
  if (text.includes('quadratic') || text.includes('factorization') || text.includes('factorisation')) return 'For a quadratic, look for two numbers that multiply to the constant term and combine to the middle coefficient. Check a factor choice by expanding it back.'
  if (text.includes('f(x)')) return 'Substitute the given x-value everywhere x appears, then follow order of operations. Keep multiplication before addition or subtraction.'
  if (text.includes('positive root') || text.includes('x^2') || text.includes('x²')) return 'First isolate the squared term, then take the positive square root if the question asks for the positive value. Check by substituting back into the original equation.'
  if (text.includes('pythagorean') || text.includes('hypotenuse') || text.includes('ladder')) return 'In a right triangle, the longest side is the hypotenuse. Use the relationship between the squares of the two legs and the hypotenuse, then take a square root when needed.'
  if (text.includes('trig') || text.includes('sin') || text.includes('cos') || text.includes('tan')) return 'Label opposite, adjacent, and hypotenuse from the angle named in the question. Then match the trig function to the correct side ratio.'
  if (text.includes('circle') || text.includes('radius')) return 'Circle area uses the radius twice. Do not switch to the circumference rule; square the radius before using pi.'
  if (text.includes('slope')) return 'Slope is rise over run. Since the line passes through the origin here, compare the y-change to the x-change from the origin to the point.'
  if (text.includes('reflected in the x-axis')) return 'A reflection across the x-axis keeps the x-coordinate and changes the sign of the y-coordinate. Picture the point moving the same distance to the other side of the x-axis.'
  if (text.includes('coordinate plane') || text.includes('point (') || text.includes('point is')) return 'Read coordinates in order: x first, then y. Use the operation the question asks for instead of swapping or multiplying the coordinates.'
  if (text.includes('vector')) return 'Treat the vector components as the two listed numbers. If the question asks for their sum, add components directly and keep their signs.'
  if (text.includes('mean') || text.includes('average')) return 'Mean means total shared equally. Add all the values, then divide by how many values there are.'
  if (text.includes('median')) return 'Put the numbers in order first. The median is the middle value, not the sum or the biggest number.'
  if (text.includes('unit rate') || text.includes('per second') || text.includes('per hour')) return 'A unit rate tells how much for one unit of time or one item. Divide the total amount by the number of units.'
  if (text.includes('percent') || text.includes('percentage')) return 'Translate the percent into a fraction or decimal of the whole. For "what percent," use part divided by whole, then scale to per hundred.'
  if (text.includes('ratio') || text.includes('out of') || text.includes('simplest form')) return 'Think of the ratio as a fraction and simplify both parts by the same common factor. Keep the order of part and whole the same.'
  if (text.includes('greater than 1/2') || text.includes('which fraction is greater') || text.includes('larger:') || text.includes('fraction is equivalent') || text.includes('equivalent to')) return 'Compare fractions by using common denominators, cross-products, or a benchmark like one-half. Equivalent fractions must scale the top and bottom by the same factor.'
  if (text.includes('fraction') || text.includes('/')) return 'For fraction operations, make sure the denominators name the same-sized pieces before adding, subtracting, or comparing. For "of," think multiplication or equal parts.'
  if (text.includes('decimal')) return 'Line up decimal places or rewrite the numbers with the same number of decimal digits. Compare or calculate by place value, not by the length of the digits.'
  if (text.includes('nearest ten') || text.includes('round') || text.includes('closest to')) return 'Look at the ones digit and decide which ten the number is closer to. Numbers ending in 5 or more round up to the next ten.'
  if (text.includes('place value') || text.includes('hundreds place') || text.includes('tens place') || text.includes('how many tens')) return 'Read place value from right to left: ones, tens, hundreds. A digit means more or less depending on the place it sits in.'
  if (text.includes('count the dots')) return 'Touch or mark each object once as you count. This helps you avoid skipping one or counting the same one twice.'
  if (text.includes('number bond') || text.includes('make 10') || text.includes('make ten')) return 'Picture a ten-frame with some spaces already filled. Count how many more are needed to complete the ten.'
  if (text.includes('comes between') || text.includes('middle number')) return 'Say the counting sequence from the first number to the last. The number between them is the one that comes after the first and before the last.'
  if (text.includes('jump forward') || text.includes('hop on the number line')) return 'Start at the first number and count each jump one at a time. The answer is the landing spot after the final jump.'
  if (text.includes('which number is larger') || text.includes('comparing numbers') || (text.includes('__') && text.includes('symbol'))) return 'Compare the largest place value first, then move right if needed. The open side of the comparison symbol points toward the larger number.'
  if (text.includes('straight sides') || text.includes('shape')) return 'Trace the outline once and count only straight sides. Curved edges, like on a circle, are not straight sides.'
  if (text.includes('unit makes the most sense') || text.includes('comparison:') || text.includes('measuring')) return 'First decide what is being measured: length, mass, capacity, time, or angle. Then choose a unit or word that fits that kind of measurement and its size.'
  if (text.includes('quarter hour') || text.includes('half hour') || text.includes('minutes') || text.includes('clock')) return 'Use 60 minutes for one full hour. A half hour is two equal parts of an hour, and a quarter hour is four equal parts.'
  if (text.includes('solution to the system')) return 'Use both equations, not just one. Adding or subtracting the equations can eliminate one variable, and substitution checks the ordered pair.'
  if (text.includes('solve') || text.includes('what is x') || text.includes('equation')) return 'Undo operations in reverse order while keeping both sides balanced. Substitute your result back into the original equation to check it.'
  if (text.includes('arithmetic sequence') || text.includes('next term')) return 'Find the common difference between neighboring terms. Add that same difference once more to get the next term.'
  if (text.includes('function') || text.includes('f(x)') || text.includes('when x =')) return 'Substitute the given x-value everywhere x appears, then follow order of operations. Keep multiplication before addition or subtraction.'
  if (text.includes('exponent') || text.includes('^')) return 'An exponent tells how many times to use the base as a factor. It is repeated multiplication, not base times exponent.'
  if (text.includes('negative') || text.includes('(-') || text.includes(' × -') || text.includes('+ (')) return 'Keep the signs attached to the numbers. A number line helps for addition, and sign rules help for multiplication.'
  if (text.includes('shared equally') || text.includes('÷') || text.includes('division')) return 'Division asks for equal groups or equal shares. Check a quotient by multiplying it back by the number of groups.'
  if (text.includes('bags with') || text.includes('equal groups') || text.includes('product of') || text.includes('×') || (text.includes('value of') && text.includes(' if '))) return 'Look for equal groups or a coefficient next to a variable. Multiplication can be checked by repeated addition or by substituting the given value first.'
  if (text.includes('subtraction') || text.includes('how many left') || text.includes('still empty') || text.includes(' - ')) return 'Start with the total and take away the part that is used, eaten, or removed. Line up place values if there are two digits.'
  if (text.includes('addition') || text.includes('altogether') || text.includes(' + ')) return 'Join the groups or combine like place values. Counting on from the larger number can keep the arithmetic tidy.'
  if (text.includes('perimeter')) return 'Perimeter is the distance around the outside. Add every side, or for a rectangle use two lengths and two widths.'
  if (text.includes('area of a triangle')) return 'A triangle is half of a rectangle with the same base and height. Multiply base by height, then take half.'
  if (text.includes('area of a rectangle') || text.includes('area of a parallelogram')) return 'Area counts square units covering a flat shape. Multiply the base or length by the matching height or width.'
  if (text.includes('area of a square') || text.includes('side length')) return 'A square area is side times side. To go from area back to side length, look for the number whose square gives the area.'
  if (text.includes('volume') || text.includes('rectangular prism') || text.includes('box')) return 'Volume counts cubes inside a 3D shape. Multiply length, width, and height, then use cubic units.'
  if (text.includes('angle')) return 'Compare the angle to the benchmarks: less than 90 is acute, exactly 90 is right, between 90 and 180 is obtuse, and 180 is straight.'
  if (text.includes('transformation') || text.includes('slid') || text.includes('turned') || text.includes('flipped')) return 'Match the motion word to the transformation: slide means translation, turn means rotation, and flip means reflection.'
  if (text.includes('gcf') || text.includes('greatest common factor')) return 'List factors of both numbers and look for the largest one they share. The GCF must divide both numbers exactly.'
  if (text.includes('algebraic form')) return 'Test the form with a few integer values of n. The right expression should always produce the kind of integer named in the question.'

  return 'Identify the math idea first, then use the exact numbers in the prompt. A quick sketch, number line, or equation can keep the work organized.'
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
      wrong: numericWrong(count, [
        [count - 1, 'That is one less — you missed counting the last dot.'],
        [count + 1, 'That is one more — you counted one dot twice.'],
        [count + 3, 'That overcounts the dots by several.'],
      ]),
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
      wrong: numericWrong(correct, [
        [a + b - 1, 'That is one short — you forgot to count one of the shells.'],
        [a + b + 1, 'That counts one shell twice.'],
        [Math.abs(a - b), 'That subtracts the two groups instead of joining them.'],
      ]),
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
      wrong: numericWrong(correct, [
        [a - b + 1, 'That is one too many — you missed taking away one of the eaten strawberries.'],
        [a - b - 1, 'That takes away one extra by mistake.'],
        [a + b, 'That adds the two numbers instead of subtracting.'],
      ]),
    })
  })

  ;[
    [8, 11],
    [14, 9],
    [6, 16],
    [13, 15],
    [19, 12],
  ].forEach(([a, b]) => {
    const correctNum = a > b ? a : b
    const smaller = Math.min(a, b)
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Comparing',
      title: 'Which number is larger',
      prompt: `Which number is larger: ${a} or ${b}?`,
      correct: String(correctNum),
      wrong: numericWrong(correctNum, [
        [smaller, 'That is the smaller of the two numbers — the question asked for the larger one.'],
        [smaller + 1, 'That is close to the smaller number, not the bigger value.'],
        [a + b, 'That adds the two numbers instead of choosing the larger one.'],
      ]),
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
        ['1', 'A single straight edge does not close into a shape on its own.', `Count each straight side of the ${shape} once.`],
        ['2', 'Two straight sides cannot enclose a region.', `Look at the full outline of the ${shape}.`],
        ['5', `A ${shape} has fewer than 5 straight sides.`, `Trace the outline of a ${shape} and count carefully.`],
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
        ['wider', 'Width is not what is being compared in this scene.', 'Pick a word that matches the actual measurement — length, height, or weight.'],
        ['slower', 'Speed is not being compared here — the objects are not moving.', 'Use a size, height, or weight word.'],
        ['newer', 'Age is not the thing being compared.', 'Stay with measurement words like longer, shorter, heavier, lighter, or taller.'],
      ],
    })
  })

  // Avoid a=5 (which gives partner 5, identical to a) — use values where the
  // ten-bond partner is distinct from the starting number.
  ;[7, 6, 3, 8, 4].forEach((a) => {
    const correctVal = 10 - a
    const cands: Array<[number, string]> = []
    const push = (v: number, why: string) => {
      if (v !== correctVal && !cands.some(([y]) => y === v) && v >= 0) cands.push([v, why])
    }
    push(correctVal + 1, `That overshoots — ${a} + ${correctVal + 1} = ${a + correctVal + 1}, not 10.`)
    push(correctVal - 1, `That falls short — ${a} + ${correctVal - 1} = ${a + correctVal - 1}, not 10.`)
    push(a, `That is the starting number itself, not the missing piece.`)
    push(10, 'That is the target sum, not the missing partner.')
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Number bonds',
      title: 'Make ten',
      prompt: `Which number do you add to ${a} to make 10?`,
      correct: String(correctVal),
      wrong: numericWrong(correctVal, cands.slice(0, 3)),
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
      wrong: numericWrong(b, [
        [a, 'That is the first number itself, not the one between.'],
        [c, 'That is the last number itself, not the one between.'],
        [b + 2, 'That jumps past the middle number.'],
      ]),
    })
  })

  ;[
    [4, 5],
    [2, 8],
    [7, 6],
    [3, 8],
    [6, 5],
  ].forEach(([start, jump]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Skip counting',
      title: 'Hop on the number line',
      prompt: `You start at ${start} and jump forward ${jump} spaces on a number line. Where do you land?`,
      correct: String(start + jump),
      wrong: numericWrong(start + jump, [
        [start + jump - 1, 'That stops one space short of the full jump.'],
        [start + jump + 1, 'That overshoots by one space.'],
        [start, 'That is the starting point, not the landing spot.'],
      ]),
    })
  })

  ;[
    [2, 5],
    [4, 7],
    [3, 8],
    [6, 2],
    [5, 3],
  ].forEach(([a, b]) => {
    definitions.push({
      id: id++,
      chapter: 'Class 1 Math: Missing number',
      title: 'Fill the box',
      prompt: `${a} + __ = ${a + b}. Which number belongs in the box?`,
      correct: String(b),
      wrong: numericWrong(b, [
        [a, 'That is the first addend, not the missing one.'],
        [a + b, 'That is the total, not the part you need to add.'],
        [b - 1, 'That is one less than the actual missing number.'],
      ]),
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
    const ones = number % 10
    // Build distractors avoiding equality with `tens` or each other.
    const candidates: Array<[number, string]> = []
    candidates.push([number, 'That writes the whole number — the question asks how many tens, not the value.'])
    if (ones !== tens) candidates.push([ones, 'That picks the ones digit instead of the tens digit.'])
    if (tens + 1 !== ones) candidates.push([tens + 1, 'That counts an extra ten that is not in the number.'])
    if (tens - 1 > 0 && tens - 1 !== ones) candidates.push([tens - 1, 'That misses one of the tens in the number.'])
    // Fallback in case of insufficient unique distractors.
    let fallback = 0
    while (candidates.length < 3) {
      if (fallback !== tens && !candidates.some(([v]) => v === fallback)) {
        candidates.push([fallback, 'That number does not match either the tens or the ones digit.'])
      }
      fallback++
    }
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Place value',
      title: 'Count the tens',
      prompt: `How many tens are in ${number}?`,
      correct: String(tens),
      wrong: numericWrong(tens, candidates.slice(0, 3)),
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
    // Build distractors deduped against the correct value to avoid collisions
    // when the carry math accidentally produces matching numbers.
    const cands: Array<[number, string]> = []
    const push = (v: number, why: string) => {
      if (v !== correct && !cands.some(([x]) => x === v)) cands.push([v, why])
    }
    push(correct - 10, 'That forgets to carry — you dropped a ten when regrouping.')
    push(correct + 10, 'That carries an extra ten that should not be there.')
    push(a + (b % 10), 'That adds only the ones digit of the second number and ignores its tens.')
    push(correct - 1, 'That is one short — likely a carry slip in the ones column.')
    push(Math.abs(a - b), 'That subtracts the two numbers instead of adding them.')
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Addition',
      title: 'Two-digit addition',
      prompt: `What is ${a} + ${b}?`,
      correct: String(correct),
      wrong: numericWrong(correct, cands.slice(0, 3)),
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
      wrong: numericWrong(correct, [
        [correct + 1, 'That is off by one — likely a borrowing slip.'],
        [correct - 10, 'That borrowed an extra ten that should not be borrowed.'],
        [a + b, 'That adds the two numbers instead of subtracting.'],
      ]),
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
      wrong: numericWrong(correct, [
        [groups + each, 'That adds the two numbers instead of using equal groups.'],
        [correct - each, 'That counts one group short — likely missed a bag.'],
        [correct + groups, 'That over-counts by adding the number of groups.'],
      ]),
    })
  })

  ;[
    [60, 15],
    [45, 5],
    [72, 8],
    [84, 12],
    [42, 6],
  ].forEach(([a, b]) => {
    const correct = a / b
    // Build distractors that cannot match the correct quotient.
    const cands: Array<[number, string]> = []
    const push = (v: number, why: string) => {
      if (v !== correct && !cands.some(([x]) => x === v) && v >= 0) cands.push([v, why])
    }
    push(b, 'That is the number of children, not the share each child gets.')
    push(correct + 1, 'That gives one extra cracker per child than is possible.')
    push(correct - 1, 'That is one short — every child can still get one more.')
    push(a, 'That picks the total snacks rather than the per-child share.')
    push(a - b, 'That subtracts the number of children from the snacks instead of dividing.')
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Sharing equally',
      title: 'Split the snacks',
      prompt: `${a} crackers are shared equally among ${b} children. How many crackers does each child get?`,
      correct: String(correct),
      wrong: numericWrong(correct, cands.slice(0, 3)),
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
      wrong: numericWrong(correct, [
        [used, 'That repeats the filled count instead of finding the empty spots.'],
        [correct + 10, 'That borrows a ten incorrectly during subtraction.'],
        [total + used, 'That adds total and used instead of subtracting.'],
      ]),
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
        ['10 minutes', `That is shorter than a ${label}.`, 'Match the time word to the right number of minutes on a clock face.'],
        ['45 minutes', `That is three quarters of an hour, not a ${label}.`, 'A quarter hour is one of four equal parts of an hour.'],
        ['90 minutes', `That is longer than an hour — and a ${label} is at most one hour.`, 'Stay within or below 60 minutes.'],
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
        ['=', `${a} and ${b} are not equal — they have different tens.`, 'Compare the tens digits first, then the ones.'],
        [correct === '<' ? '>' : '<', 'That reverses the comparison.', `${a} is ${correct === '<' ? 'less than' : 'greater than'} ${b}.`],
        ['+', 'That is an operation, not a comparison.', 'Use one of <, >, or = to compare two numbers.'],
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
        ['hours', `A ${item} is measured in size, not in time.`, 'Pick a unit that measures length, weight, or volume.'],
        ['degrees', `Degrees describe angles or temperature, not the size of a ${item}.`, 'Match the unit to what is being measured.'],
        ['pages', `Pages count books, not a ${item}.`, 'Choose a standard metric unit.'],
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
    const correctRound = rounded + (number % 10 >= 5 ? 10 : 0)
    // The "other" ten — the ten on the wrong side of the rounding decision.
    const wrongTen = correctRound === rounded ? rounded + 10 : rounded
    const cands: Array<[number, string]> = []
    const push = (v: number, why: string) => {
      if (v !== correctRound && !cands.some(([y]) => y === v) && v >= 0) cands.push([v, why])
    }
    push(wrongTen, `That rounds the wrong way — ${number} is closer to ${correctRound}, not ${wrongTen}.`)
    push(number, 'That is the original number, not its rounded ten.')
    push(correctRound + 10, `That skips ahead a ten — ${number} is not that far away.`)
    push(correctRound - 10, `That goes back a ten — ${number} is not that low.`)
    push(rounded, `That picks ${rounded}, the ten just below — recheck whether ${number} rounds up or down.`)
    definitions.push({
      id: id++,
      chapter: 'Class 2 Math: Nearest ten',
      title: 'Round the number',
      prompt: `Which ten is ${number} closest to?`,
      correct: String(correctRound),
      wrong: numericWrong(correctRound, cands.slice(0, 3)),
    })
  })

  return buildCourse('Primary', definitions)
}

function buildTemplateCourse(
  topic: Topic,
  baseId: number,
  chapter: string,
  title: string,
  prompts: TemplatePrompt[],
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
      mentorHint: entry.mentorHint,
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
        wrong: fractionWrong(String(correct), [
          [`${a}/${b + 2}`, 'That fraction has a larger denominator with the same numerator, so it is smaller than the correct one.'],
          [`${a - 1}/${b}`, 'That reduces the numerator with the same denominator, making the fraction smaller.'],
          ['2/7', '2/7 is less than 1/2 because the numerator is less than half the denominator.'],
        ]),
      }
    }),
    ...[
      [18, 6, 3],
      [28, 7, 4],
      [45, 9, 5],
      [42, 6, 7],
      [63, 9, 7],
    ].map(([a, b, correct]) => {
      // Build distractors that cannot match the correct quotient or each other.
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== correct && !cands.some(([x]) => x === v)) cands.push([v, why])
      }
      push(a, `That picks the dividend ${a} instead of the quotient.`)
      push(b, `That picks the divisor ${b} instead of the quotient.`)
      push(correct + 2, 'That overshoots — recheck how many times the divisor fits.')
      push(correct + 1, 'That is one too many — recheck the division.')
      push(correct - 1, 'That is one short of the actual quotient.')
      push(a - b, 'That subtracts the divisor from the dividend instead of dividing.')
      return {
        prompt: `What is ${a} ÷ ${b}?`,
        correct: String(correct),
        wrong: numericWrong(correct, cands.slice(0, 3)),
      }
    }),
    ...[
      [7, -3, 4],
      [-8, -5, -13],
      [12, -9, 3],
      [-14, 6, -8],
      [5, -11, -6],
    ].map(([a, b, correct]) => {
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== correct && !cands.some(([x]) => x === v)) cands.push([v, why])
      }
      push(a + Math.abs(b), `That treats ${b} as positive instead of negative.`)
      push(a - b, 'That subtracts when the question asks for addition with a negative number.')
      push(b - a, 'That swaps the operands and the signs.')
      push(Math.abs(a) + Math.abs(b), 'That sums absolute values and drops the signs entirely.')
      push(-correct, 'That has the right magnitude but the wrong sign.')
      return {
        prompt: `What is ${a} + (${b})?`,
        correct: String(correct),
        wrong: numericWrong(correct, cands.slice(0, 3)),
      }
    }),
    ...[
      [3, 2, 11],
      [5, 4, 19],
      [6, 3, 21],
      [8, 1, 25],
      [7, 5, 26],
    ].map(([x, add, value]) => {
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== x && !cands.some(([y]) => y === v)) cands.push([v, why])
      }
      push(value - add, 'That subtracts the constant but forgets to divide by 3.')
      push(Math.floor((value - add) / 2), 'That divides by 2 instead of by the coefficient 3.')
      push(value, 'That picks the right-hand side instead of solving for x.')
      push(x + 1, 'That is one too many — recheck the division step.')
      push(x - 1, 'That is one too few — recheck the division step.')
      push(add, 'That picks the added constant instead of the unknown.')
      return {
        prompt: `If 3x + ${add} = ${value}, what is x?`,
        correct: String(x),
        wrong: numericWrong(x, cands.slice(0, 3)),
      }
    }),
    ...[
      [12, 8, 40],
      [9, 5, 28],
      [15, 11, 52],
      [14, 10, 48],
      [18, 7, 50],
    ].map(([l, w, correct]) => ({
      prompt: `A rectangle has length ${l} cm and width ${w} cm. What is its perimeter?`,
      correct: String(correct),
      wrong: numericWrong(correct, [
        [l * w, 'That computes area (l × w) instead of perimeter.'],
        [l + w, 'That adds length and width only once — perimeter needs both pairs.'],
        [2 * l + w, 'That doubles the length but forgets to double the width.'],
      ]),
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
        [`Their product is ${sum}`, 'That confuses addition with multiplication.', `Their product is ${product}, not ${sum}.`],
        [`Their difference is ${sum}`, `Their difference is ${Math.abs(a - b)}, which is not ${sum}.`, 'Subtract the smaller from the larger to find difference.'],
        [`They are equal`, `${a} and ${b} are different numbers.`, 'Read both numbers carefully before deciding.'],
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
      wrong: fractionWrong('2/5', [
        [`${part}/${whole}`, 'That is the unsimplified ratio — divide numerator and denominator by their GCF.'],
        ['1/5', 'That divides the denominator by 5 but forgets to divide the numerator the same way.'],
        ['5/2', 'That inverts the fraction — numerator and denominator are swapped.'],
      ]),
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
        [String(t / d), 'That inverts the rate — it gives seconds per meter, not meters per second.', `Divide ${d} m by ${t} s to get ${correct} m/s.`],
        [String(d), `That reports the total distance ${d} m instead of the per-second rate.`, 'Unit rate is the distance covered in one second.'],
        [String(d + t), 'That adds distance and time, which mixes two different units.', `Use division: ${d} ÷ ${t} = ${correct}.`],
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
        ['straight', `A straight angle is exactly 180°, but ${angle}° is much less.`, 'Compare the angle to the 90° and 180° benchmarks.'],
        ['reflex', `A reflex angle is greater than 180°, but ${angle}° is less than that.`, 'Reflex angles open past a half-turn.'],
        ['equilateral', 'Equilateral describes a triangle, not a single angle classification.', 'Use angle-size vocabulary: acute, right, obtuse, straight, reflex.'],
      ],
    })),
    ...[
      [11, 13, 17, 13],
      [22, 18, 16, 18],
      [5, 7, 9, 7],
      [30, 26, 28, 28],
      [14, 12, 20, 14],
    ].map(([a, b, c, median]) => {
      // The "smallest" and "largest" values in the actual sorted list — guaranteed
      // distinct from the median.
      const sorted = [a, b, c].sort((x, y) => x - y)
      const smallest = sorted[0]
      const largest = sorted[2]
      return {
        prompt: `What is the median of the numbers ${a}, ${b}, and ${c}?`,
        correct: String(median),
        wrong: numericWrong(median, [
          [smallest, `That picks the smallest of ${a}, ${b}, ${c} — the median is the middle value once sorted.`],
          [largest, `That picks the largest of ${a}, ${b}, ${c} — the median is the middle value once sorted.`],
          [a + b + c, 'That is the sum — you may be thinking of the mean rather than the median.'],
        ]),
      }
    }),
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
    ].map(([m, x, correct]) => {
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== correct && !cands.some(([y]) => y === v)) cands.push([v, why])
      }
      push(m + x + 1, 'That adds m, x, and 1 instead of multiplying m by x.')
      push(m * (x + 1), 'That multiplies m by (x + 1) — but the +1 is added after the multiplication, not inside.')
      push(m * x, 'That computes mx but forgets to add the +1 constant.')
      push(correct + 1, 'That adds an extra 1 by mistake.')
      push(m + x, 'That adds m and x instead of multiplying them.')
      return {
        prompt: `What is the value of ${m}x + 1 when x = ${x}?`,
        correct: String(correct),
        wrong: numericWrong(correct, cands.slice(0, 3)),
      }
    }),
    // Slope subsection: use varied clean-integer slopes (no longer always 3) so the
    // section has pedagogical variety. Each (x, y) pair gives an integer slope.
    ...[
      [5, 15, 3],
      [2, 8, 4],
      [3, -9, -3],
      [6, 12, 2],
      [4, 20, 5],
    ].map(([x, y, slope]) => {
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== slope && !cands.some(([y2]) => y2 === v)) cands.push([v, why])
      }
      push(x, `That picks the x-coordinate (${x}) instead of computing rise over run.`)
      push(y, `That picks the y-coordinate (${y}) instead of dividing y by x.`)
      push(y - x, 'That subtracts x from y instead of dividing y by x.')
      push(x + y, 'That adds the coordinates rather than dividing y by x.')
      push(1, 'That assumes a 45-degree slope without using the actual coordinates.')
      return {
        prompt: `A line passes through the origin and the point (${x}, ${y}). What is its slope?`,
        correct: String(slope),
        wrong: numericWrong(slope, cands.slice(0, 3)),
      }
    }),
    ...[
      [2, 5, 32],
      [3, 4, 81],
      [5, 3, 125],
      [4, 2, 16],
      [10, 2, 100],
    ].map(([base, power, correct]) => ({
      prompt: `What is ${base}^${power}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [
        [base * power, 'That multiplies base by exponent instead of using repeated multiplication.'],
        [base + power, 'That adds base and exponent rather than computing the power.'],
        [correct - base, 'That is one factor of the base short of the correct power.'],
      ]),
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
      wrong: numericWrong(hyp, [
        [a + b, 'That just adds the legs — the Pythagorean theorem squares them first.'],
        [b - a, 'That subtracts the legs, which is not the Pythagorean rule.'],
        [a * b, 'That multiplies the legs — the hypotenuse comes from √(a² + b²).'],
      ]),
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
        ['dilation', 'Dilation scales the shape larger or smaller — the description does not change size.', 'Look for the keyword: slide, turn, or flip.'],
        ['none of these', 'The description clearly names a standard rigid transformation.', 'Match the motion to translation, rotation, or reflection.'],
        ['perimeter', 'Perimeter is a measurement, not a transformation.', 'Choose a transformation type, not a measurement.'],
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
      wrong: numericWrong(correct, [
        [side + 1, 'That is one too long — the square root of the area is smaller.'],
        [Math.floor(area / 2), 'That divides area by 2 instead of taking its square root.'],
        [area, 'That uses the area itself — the side is √area.'],
      ]),
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
      wrong: numericWrong(correct, [
        [a + b, 'Parentheses imply multiplication, not addition.'],
        [correct - a, 'That is one group short — multiply, do not subtract.'],
        [b, 'That repeats the second factor and ignores the first.'],
      ]),
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
      wrong: numericWrong(correct, [
        [a + b, 'That adds when you should subtract to isolate x.'],
        [b - a, 'That reverses the subtraction — x = a - b, not b - a.'],
        [a, 'That ignores the b term — you must subtract it from both sides.'],
      ]),
    })),
    ...[
      [4, 6, 24],
      [7, 5, 35],
      [9, 3, 27],
      [8, 8, 64],
      [12, 4, 48],
    ].map(([l, w, correct]) => {
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== correct && !cands.some(([y]) => y === v)) cands.push([v, why])
      }
      push(2 * (l + w), 'That computes perimeter (2(l + w)) instead of area.')
      push(l + w, 'That adds the sides — area requires multiplication.')
      push(l, 'That picks just one side length instead of multiplying both.')
      push(w, 'That picks just one side length instead of multiplying both.')
      push(correct + l, 'That overshoots by an extra length factor.')
      return {
        prompt: `What is the area of a rectangle with side lengths ${l} and ${w}?`,
        correct: String(correct),
        wrong: numericWrong(correct, cands.slice(0, 3)),
      }
    }),
    ...[
      [12, 14, 16, 14],
      [21, 25, 19, 21],
      [8, 10, 12, 10],
      [31, 29, 35, 31],
      [40, 34, 38, 38],
    ].map(([a, b, c, mean]) => {
      const sortedAsc = [a, b, c].sort((x, y) => x - y)
      const smallest = sortedAsc[0]
      const largest = sortedAsc[2]
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== mean && !cands.some(([y]) => y === v)) cands.push([v, why])
      }
      push(a + b + c, 'That is the sum — divide by 3 to get the mean.')
      push(largest - smallest, 'That is the range (max − min), not the mean.')
      push(smallest, `That picks the smallest value (${smallest}) instead of averaging all three.`)
      push(largest, `That picks the largest value (${largest}) instead of averaging all three.`)
      return {
        prompt: `What is the mean of ${a}, ${b}, and ${c}?`,
        correct: String(mean),
        wrong: numericWrong(mean, cands.slice(0, 3)),
      }
    }),
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
      // Per-distractor diagnosis: first wrong has right constant but wrong middle term;
      // second flips both signs (still right constant, wrong middle); third has a sign or
      // middle-term mismatch.
      const whys: [string, string, string][] = [
        [wrongs[0], 'These factors multiply to the right constant but their sum gives the wrong middle term.', `Check by expanding: the middle coefficient must match the x-term in ${expr}.`],
        [wrongs[1], 'Both signs are flipped — that produces a positive constant but a negative middle term.', `In ${expr} the middle coefficient is positive, so both factor constants must be positive.`],
        [wrongs[2], 'The signs or grouping in this pair do not expand back to the original quadratic.', `Multiply this pair out and compare each term with ${expr}.`],
      ]
      return {
        prompt: `Which is the correct factorization of ${expr}?`,
        correct: String(correct),
        wrong: whys,
      }
    }),
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
        [`(${y}, ${x})`, 'That swaps x and y — only one ordering satisfies both equations.', `Substitute: ${x} + ${y} = ${total} and ${x} - ${y} = ${x - y}.`],
        [`(${total}, ${x - y})`, 'Those are the right-hand sides of the equations, not the variable values.', 'Solve for the variables themselves; do not just copy the constants.'],
        [`(${x + 1}, ${y - 1})`, 'That ordered pair does not satisfy either equation.', 'Plug the pair into both equations to verify.'],
      ],
    })),
    ...[
      [2, -3, -6],
      [-4, 5, -20],
      [7, -2, -14],
      [-6, -3, 18],
      [9, 4, 36],
    ].map(([a, b, correct]) => {
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== correct && !cands.some(([y]) => y === v)) cands.push([v, why])
      }
      push(-correct, 'That has the right magnitude but the wrong sign for this signed product.')
      push(a + b, 'That adds the two numbers instead of multiplying them.')
      push(a - b, 'That subtracts instead of multiplying.')
      push(Math.abs(a) + Math.abs(b), 'That adds the absolute values and drops the sign rule.')
      return {
        prompt: `What is ${a} × ${b}?`,
        correct: String(correct),
        wrong: numericWrong(correct, cands.slice(0, 3)),
      }
    }),
    // Fixed: original data labelled `correct = x` but the equation roots did not
    // match the labelled value. Recompute the equation so each x is genuinely the
    // root of x² + add = value.
    ...[
      [5, 4, 29],
      [6, 3, 39],
      [8, 2, 66],
      [4, 7, 23],
      [9, 1, 82],
    ].map(([x, add, value]) => {
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== x && !cands.some(([y]) => y === v)) cands.push([v, why])
      }
      push(value - add, 'That subtracts the constant but forgets to take the square root.')
      push(value, 'That uses the right-hand side directly without subtracting and rooting.')
      push(x + 2, 'That overshoots — verify by squaring and adding the constant.')
      push(x - 1, 'That is one short — recheck the square root.')
      push(x + 1, 'That is one too many — recheck the square root.')
      return {
        prompt: `If x^2 + ${add} = ${value}, what is the positive value of x?`,
        correct: String(x),
        wrong: numericWrong(x, cands.slice(0, 3)),
      }
    }),
    ...[
      [2, 1, 5],
      [3, 4, 13],
      [4, 2, 10],
      [5, 3, 13],
      [6, 1, 8],
    ].map(([x, y, correct]) => ({
      prompt: `Point (${x}, ${y}) lies in the coordinate plane. What is x + y?`,
      correct: String(correct),
      wrong: numericWrong(correct, [
        [x * y, 'That multiplies the coordinates instead of adding them.'],
        [x - y, 'That subtracts y from x rather than adding.'],
        [y - x, 'That subtracts x from y rather than adding.'],
      ]),
    })),
    // Fixed: original prompt was `GCF of a and b*correct` but data had a = b*correct,
    // making both numbers equal so the actual GCF was a, not the labelled correct.
    // Now use a clean (a, second) pair where the GCF is genuinely the labelled value.
    ...[
      [18, 24, 6],
      [32, 40, 8],
      [45, 27, 9],
      [56, 40, 8],
      [63, 49, 7],
    ].map(([a, second, correct]) => {
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== correct && !cands.some(([y]) => y === v)) cands.push([v, why])
      }
      push(a, `That picks the first number (${a}) — the GCF must divide both, not equal either.`)
      push(second, `That picks the second number (${second}) — the GCF must divide both, not equal either.`)
      push(a + second, 'That sums the two numbers — the GCF is a divisor, not a sum.')
      push(Math.abs(a - second), 'That takes their difference — the GCF must divide both numbers.')
      push(2, 'That picks a generic small factor — but it does not give the greatest common factor here.')
      return {
        prompt: `What is the greatest common factor of ${a} and ${second}?`,
        correct: String(correct),
        wrong: numericWrong(correct, cands.slice(0, 3)),
      }
    }),
    ...[
      [2, 3, 6],
      [4, 5, 20],
      [7, 2, 14],
      [8, 3, 24],
      [9, 4, 36],
    ].map(([a, b, correct]) => ({
      prompt: `What is the value of ${a}y if y = ${b}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [
        [a + b, 'That adds a and y instead of multiplying — ay means a times y.'],
        [b, 'That reports just y without multiplying by the coefficient.'],
        [correct + a, 'That adds an extra a onto the product by mistake.'],
      ]),
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
      wrong: numericWrong(hyp, [
        [a + b, 'That adds the legs — the hypotenuse comes from √(a² + b²), not a + b.'],
        [b - a, 'That subtracts the legs — the hypotenuse is always longer than each leg.'],
        [a * b, 'That multiplies the legs — too large for a hypotenuse.'],
      ]),
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
      wrong: numericWrong(correct, [
        [2 * (a + b), 'That computes a perimeter-style expression instead of area.'],
        [a + b, 'That adds base and height — area requires multiplication.'],
        [correct - a, 'That subtracts a base length from the area rather than multiplying.'],
      ]),
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
      wrong: numericWrong(b, [
        [m + x, 'That adds slope and x instead of multiplying then adding the intercept.'],
        [b - 1, 'That is one less than the correct y — likely an arithmetic slip.'],
        [m * x, 'That computes mx but forgets to add the y-intercept.'],
      ]),
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
      // Build per-prompt distractors that cannot collide with the correct answer.
      // For each (b, c) pair, the actual roots are positive and small; distractors
      // shift the signs or magnitudes so they never match.
      const wrongPairs: Array<[string, string]> = [
        [
          `x = ${1} and x = ${-b}`,
          'That uses the coefficient of x rather than two factors of the constant term.',
        ],
        [
          `x = ${-2} and x = ${-3}`,
          'Both roots are negative, but a positive constant with a negative middle term gives positive roots.',
        ],
        [
          'There is only one solution',
          'A quadratic with a non-zero discriminant has two distinct real roots.',
        ],
      ]
      return {
        prompt: `What are the solutions of x^2 ${b >= 0 ? '+' : '-'} ${Math.abs(b)}x + ${c} = 0?`,
        correct: String(correct),
        wrong: wrongPairs.map(([val, why]): [string, string, string] => [
          val,
          why,
          `Find two numbers that multiply to ${c} and add to ${b} — those are the roots.`,
        ]),
      }
    }),
    // Trig subsection: build a candidate pool of plausible fraction distractors
    // (ratios formed from the actual triangle sides) and pick the first three
    // that are unique and differ from the correct value. Guarantees no collision.
    ...[
      [3, 4, 'sin', '4/5', 5],
      [5, 12, 'sin', '12/13', 13],
      [8, 15, 'cos', '8/17', 17],
      [7, 24, 'tan', '24/7', 25],
      [9, 12, 'cos', '3/5', 15],
    ].map((entry) => {
      const [a, b, fn, correct, hyp] = entry as [number, number, string, string, number]
      const pool: Array<[string, string]> = [
        [`${b}/${a}`, `That uses leg-over-leg (opposite over adjacent) — for ${fn} the standard pairing is different.`],
        [`${a}/${b}`, `That uses adjacent-over-opposite — for ${fn} you need a side paired with the hypotenuse or the other ratio.`],
        [`${a}/${hyp}`, `That uses adjacent (${a}) over hypotenuse (${hyp}) — that is the standard ratio for a different trig function or angle.`],
        [`${hyp}/${b}`, `That inverts the standard ratio for ${fn}.`],
        [`${hyp}/${a}`, `That uses hypotenuse over the wrong leg — recheck which side goes on top for ${fn}.`],
      ]
      const seen = new Set<string>([correct])
      const filtered: Array<[string, string]> = []
      for (const [v, why] of pool) {
        if (!seen.has(v)) {
          seen.add(v)
          filtered.push([v, why])
        }
        if (filtered.length === 3) break
      }
      return {
        prompt: `In a right triangle with legs ${a} and ${b}, what is ${fn} of the acute angle opposite the side of length ${b}?`,
        correct: String(correct),
        wrong: fractionWrong(String(correct), filtered),
      }
    }),
    ...[
      [7, 154],
      [5, 78.5],
      [10, 314],
      [3, 28.26],
      [12, 452.16],
    ].map(([r, correct]) => ({
      prompt: `Using π ≈ 3.14, what is the area of a circle with radius ${r}?`,
      correct: String(correct),
      wrong: numericWrong(Number(correct), [
        [Math.round(2 * 3.14 * Number(r)), 'That computes circumference (2πr) instead of area (πr²).'],
        [Number(r) * Number(r), 'That squares the radius but forgets to multiply by π.'],
        [Number(r) + 3, 'That adds a small number to the radius — no area formula gives that.'],
      ]),
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
      wrong: numericWrong(correct, [
        [a + b, `That is the sum of the roots (${a + b}), not the product.`],
        [Math.abs(a - b), 'That is the difference of the roots, not their product.'],
        [a, 'That is one root, not the product of both roots.'],
      ]),
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
      wrong: numericWrong(a, [
        [b, `That is the height up the wall (${b} m), not the distance from the wall.`],
        [hyp, `That is the ladder length (${hyp} m), which is the hypotenuse, not the base distance.`],
        [hyp - a, 'That subtracts the base from the hypotenuse — but the base must be solved using √(hyp² - height²).'],
      ]),
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
      wrong: numericWrong(correct, [
        [inside, 'That repeats the interior angle without adding the exterior.'],
        [outside, 'That repeats the exterior angle without adding the interior.'],
        [inside - outside, 'That subtracts when the question asks for the sum.'],
      ]),
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
      wrong: numericWrong(correct / 2, [
        [correct, `That computes base × height (${correct}) but forgets the 1/2 factor for triangle area.`],
        [base + height, 'That adds base and height — triangle area uses multiplication and the 1/2 factor.'],
        [height, 'That reports just the height — area combines base, height, and the 1/2 factor.'],
      ]),
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
        [String(a + b), `That adds ${a} and ${b} but does not divide by 2.`, `Divide ${a + b} by 2 to get the mean.`],
        [String(Math.abs(a - b)), 'That is the difference, not the average.', 'Average sits between the two values, not at their gap.'],
        [String(a), `That picks just ${a} — the mean uses both numbers equally.`, 'Add both values and divide by 2.'],
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
      wrong: numericWrong(correct, [
        [r * exp, 'That multiplies base by exponent instead of using repeated multiplication.'],
        [r + exp, 'That adds base and exponent rather than computing the power.'],
        [correct - r, 'That is one factor of r short of the correct power.'],
      ]),
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
      wrong: numericWrong(-y, [
        [y, `That keeps the original y unchanged — reflection across the x-axis flips the sign of y.`],
        [x, `That picks the x-coordinate; reflection across the x-axis leaves x untouched and flips y.`],
        [x + y, 'That adds the coordinates rather than negating y.'],
      ]),
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
    ].map(([x, correct]) => {
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== correct && !cands.some(([y]) => y === v)) cands.push([v, why])
      }
      push(x + 1, 'That computes x + 1 instead of x² + 1.')
      push(x * 2, 'That doubles x instead of squaring it.')
      push(correct - 1, 'That forgets to add the constant +1 after squaring.')
      push(x, 'That just reports x without applying the rule.')
      push(x * x, 'That squares x but forgets to add the constant +1.')
      return {
        prompt: `If f(x) = x^2 + 1, what is f(${x})?`,
        correct: String(correct),
        wrong: numericWrong(correct, cands.slice(0, 3)),
      }
    }),
    ...[
      [1, 3, 5, 7, 9, 11],
      [4, 7, 10, 13, 16, 19],
      [2, 6, 10, 14, 18, 22],
      [5, 8, 11, 14, 17, 20],
      [9, 12, 15, 18, 21, 24],
    ].map((sequence) => {
      const correct = sequence[5]
      const last = sequence[4]
      const diff = sequence[1] - sequence[0]
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== correct && !cands.some(([y]) => y === v)) cands.push([v, why])
      }
      push(last, `That repeats the last given term (${last}) instead of advancing by the common difference.`)
      push(last + 1, 'That adds 1 instead of the actual common difference.')
      push(last + diff + 1, 'That overshoots by one — apply the common difference exactly.')
      push(last * 2, 'That doubles the last term — arithmetic sequences add a constant, not multiply.')
      push(correct + diff, 'That advances two steps instead of one — pick the very next term.')
      return {
        prompt: `What is the next term in the arithmetic sequence ${sequence.slice(0, 5).join(', ')}?`,
        correct: String(correct),
        wrong: numericWrong(correct, cands.slice(0, 3)),
      }
    }),
    ...[
      [5, 2, 10],
      [6, 3, 20],
      [7, 2, 21],
      [8, 4, 70],
      [10, 2, 45],
    ].map(([n, r, correct]) => {
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== correct && !cands.some(([y]) => y === v)) cands.push([v, why])
      }
      push(n * r, 'That multiplies n and r — combinations use n!/(r!(n−r)!), not simple multiplication.')
      push(n + r, 'That adds n and r — combinations are not a sum.')
      push(correct + r, 'That overshoots by r — recheck the binomial calculation.')
      push(n - r, 'That subtracts r from n — that gives a leftover count, not a combination count.')
      push(n, 'That picks just n — the count depends on both n and r.')
      push(correct * 2, 'That double-counts — combinations do not distinguish order, so the doubled value would be a permutation count.')
      return {
        prompt: `How many combinations of ${r} items can be chosen from ${n} items?`,
        correct: String(correct),
        wrong: numericWrong(correct, cands.slice(0, 3)),
      }
    }),
    ...[
      ['sin 30°', '1/2'],
      ['cos 60°', '1/2'],
      ['sin 90°', '1'],
      ['cos 0°', '1'],
      ['tan 45°', '1'],
    ].map(([expr, correct]) => ({
      prompt: `What is the exact value of ${expr}?`,
      correct: String(correct),
      wrong: fractionWrong(String(correct), [
        ['0', `${expr} is non-zero at this standard angle.`],
        ['2', 'Sine, cosine, and tangent of standard angles do not equal 2.'],
        ['3/2', 'That fraction is larger than 1, which is impossible for sine or cosine.'],
      ]),
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
        ['x', `That keeps ${variable} unchanged — differentiate term-by-term and apply the power rule.`, `The derivative of ${expr} is ${correct}.`],
        ['0', `${expr} is not a constant, so its derivative is non-zero.`, 'Only constant terms differentiate to zero.'],
        ['1', `The derivative of ${expr} is not 1 — that only works for ${variable} on its own.`, 'Use the power rule on each term.'],
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
        [`${decimal}%`, 'That keeps the decimal value without multiplying by 100.', `Multiply ${decimal} by 100 to get ${correct}.`],
        [`${Number(decimal) * 10}%`, 'That scales by 10 instead of 100.', 'Per cent means per hundred — multiply by 100.'],
        [`${Number(decimal) * 1000}%`, 'That scales by 1000 — one factor of 10 too many.', `${decimal} × 100 = ${correct}.`],
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
      wrong: fractionWrong(`${correct}/20`, [
        [`${a * b}/20`, 'That multiplies the probabilities — but mutually exclusive events use addition for the union.'],
        [`${Math.abs(a - b)}/20`, 'That subtracts the probabilities — the union of disjoint events adds them.'],
        [`${a + b}/10`, 'That uses the wrong denominator — the sample space is /20, not /10.'],
      ]),
    })),
    ...[
      [2, 4, 8],
      [3, 5, 15],
      [6, 7, 42],
      [8, 9, 72],
      [10, 12, 120],
    ].map(([x, y, correct]) => {
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== correct && !cands.some(([z]) => z === v)) cands.push([v, why])
      }
      push(x + y, 'That adds the diagonal entries — determinant of a diagonal matrix is their product.')
      push(Math.abs(y - x), 'That subtracts the entries instead of multiplying.')
      push(x, `That picks just ${x} — the determinant of [[x,0],[0,y]] is x·y.`)
      push(y, `That picks just ${y} — the determinant of [[x,0],[0,y]] is x·y.`)
      push(0, 'That treats the zero entries as if they collapsed the determinant — but the diagonal product is nonzero.')
      return {
        prompt: `What is the determinant of the 2x2 matrix [[${x}, 0], [0, ${y}]]?`,
        correct: String(correct),
        wrong: numericWrong(correct, cands.slice(0, 3)),
      }
    }),
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
        ['n/2', `n/2 is not an integer in general, so it cannot represent every ${description} integer.`, 'Use a form whose values are always integers.'],
        ['n + 1/2', 'That always gives a non-integer half value.', 'The form must always produce an integer.'],
        ['n^2', `n² only produces squares, not every ${description} integer.`, 'Match the pattern to the right algebraic form.'],
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
      wrong: numericWrong(correct, [
        [x * y, 'That multiplies the components instead of adding them.'],
        [y - x, 'That subtracts one component from the other — the question asks for the sum.'],
        [x, 'That reports just the first component without adding the second.'],
      ]),
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
    ].map(([expr, correct]) => {
      // Filter distractors so none collide with the correct answer (notably when
      // the correct answer is "0" for the constant case).
      const pool: Array<[string, string, string]> = [
        ['x', `That is not the power-rule result for ${expr}.`, `The derivative of ${expr} is ${correct}.`],
        ['1', `The derivative of ${expr} is not 1 — that only works for x on its own.`, 'Apply d/dx of xⁿ = n·xⁿ⁻¹ correctly.'],
        ['0', `${expr} is not a constant, so its derivative is non-zero.`, 'Only constant terms differentiate to zero.'],
        [`${expr}`, `That keeps ${expr} unchanged — differentiation transforms the expression.`, 'Apply the power rule to each term.'],
        ['nx^(n-1) with no coefficient', 'That forgets to multiply by the coefficient in front of x^n.', 'Bring the exponent down as a multiplier and reduce by 1.'],
      ]
      const filtered = pool.filter(([v]) => v !== correct).slice(0, 3)
      return {
        prompt: `What is the derivative of ${expr}?`,
        correct: String(correct),
        wrong: filtered,
      }
    }),
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
        ['x + C', `Differentiating x + C gives 1, not ${expr}.`, `Reverse the power rule on ${expr}.`],
        ['0', 'A non-zero function has a non-zero antiderivative.', 'Differentiate your answer to check it gives back the integrand.'],
        ['The same expression', 'Integration and differentiation are inverses, not identities.', `Apply the reverse power rule to ${expr}.`],
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
      wrong: numericWrong(correct, [
        [a + b, 'That adds the diagonal entries — the determinant is their product.'],
        [b - a, 'That subtracts the entries; the determinant of a diagonal 2×2 is a·b.'],
        [a, 'That picks one diagonal entry instead of multiplying them.'],
      ]),
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
      wrong: fractionWrong(String(correct), [
        ['0', `${description} is possible, so its probability is not zero.`],
        ['2/3', 'That overstates the chance for this event.'],
        ['5/6', 'That is much higher than the actual probability of this event.'],
      ]),
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
      wrong: numericWrong(hyp, [
        [a + b, 'That adds the legs — Pythagoras squares them first.'],
        [b - a, 'That subtracts the legs; the hypotenuse is always longer than each leg.'],
        [a * b, 'That multiplies the legs; the hypotenuse is √(a² + b²).'],
      ]),
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
      wrong: numericWrong(Number(correct), [
        [Number(correct) + 1, 'That is one larger than √(constant) — recheck the square root.'],
        [Number(correct) - 1, 'That is one smaller than √(constant) — recheck the square root.'],
        [Number(correct) * 2, 'That doubles the actual root — the positive root is √(constant), not 2·√(constant).'],
      ]),
    })),
    ...[
      [10, 40],
      [25, 100],
      [15, 60],
      [12, 48],
      [18, 72],
    ].map(([part, whole]) => {
      const correct = `${(part / whole) * 100}%`
      const pool: Array<[string, string, string]> = [
        [`${part}%`, `That treats ${part} as if it were already on a /100 scale.`, `Compute ${part}/${whole} × 100 to find the percent.`],
        [`${whole}%`, `That picks ${whole}, the total, instead of the ratio.`, 'Per cent expresses the part as a share of the whole.'],
        [`${(whole / part) * 100}%`, 'That inverts the ratio — it computes whole/part, not part/whole.', `Use part ÷ whole × 100.`],
        [`${part / whole}%`, `That stops at the decimal ratio without multiplying by 100.`, `Multiply ${part}/${whole} by 100.`],
        [`${(part / whole) * 10}%`, 'That scales by 10 instead of 100.', 'Per cent means per hundred.'],
      ]
      const filtered = pool.filter(([v]) => v !== correct).slice(0, 3)
      return {
        prompt: `${part} is what percent of ${whole}?`,
        correct,
        wrong: filtered,
      }
    }),
    // Fixed: original code labelled correct = a + b, but f(1) = a + (b − a) = b.
    // The labelled answers in the original tuples were always one too high.
    ...[
      [2, 6],
      [3, 7],
      [4, 9],
      [5, 11],
      [6, 13],
    ].map(([a, b]) => {
      const correct = a + (b - a)  // = b, the actual value of f(1).
      const cands: Array<[number, string]> = []
      const push = (v: number, why: string) => {
        if (v !== correct && !cands.some(([y]) => y === v)) cands.push([v, why])
      }
      push(a + b, `That adds a (${a}) and b (${b}) — f(1) is a·1 + (b − a) = b = ${correct}.`)
      push(a, `That picks the slope coefficient ${a} and forgets the constant term.`)
      push(b - a, `That picks the constant ${b - a} and forgets the a·1 term.`)
      push(a * b, 'That multiplies a and b instead of evaluating the linear rule at x = 1.')
      return {
        prompt: `If f(x) = ${a}x + ${b - a}, what is f(1)?`,
        correct: String(correct),
        wrong: numericWrong(correct, cands.slice(0, 3)),
      }
    }),
    ...[
      [3, 5, 15],
      [4, 6, 24],
      [7, 8, 56],
      [9, 2, 18],
      [10, 12, 120],
    ].map(([a, b, correct]) => ({
      prompt: `What is the product of ${a} and ${b}?`,
      correct: String(correct),
      wrong: numericWrong(correct, [
        [a + b, 'That adds the two numbers instead of multiplying.'],
        [b - a, 'That subtracts when the question asks for a product.'],
        [a, 'That picks only the first factor and ignores the second.'],
      ]),
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
      wrong: numericWrong(middle, [
        [a, 'That picks the smallest value — the median is the middle value once sorted.'],
        [c, 'That picks the largest value — the median is the middle value once sorted.'],
        [a + b + c, 'That is the sum — you may be thinking of the mean, not the median.'],
      ]),
    })),
  ]

  return buildTemplateCourse('Mathematics', 30701, 'Class 12 Math', 'Class 12 skill check', prompts)
}

export function makeEurekaMathFoundations38Quiz(): Question[] {
  // Per-skill prompts with skill-specific distractor diagnoses.
  const skillBank: Array<{
    prompt: string
    correct: string
    wrong: [string, string, string][]
  }> = [
    {
      prompt: 'Which digit is in the hundreds place in 472?',
      correct: '4',
      wrong: [
        ['7', 'That is the tens digit, not the hundreds.', 'Read place value from right: ones, tens, hundreds.'],
        ['2', 'That is the ones digit.', 'The hundreds place is the third digit from the right.'],
        ['472', 'That is the whole number, not a single digit.', 'Identify just the hundreds-place digit.'],
      ],
    },
    {
      prompt: 'Which digit is in the tens place in 658?',
      correct: '5',
      wrong: [
        ['6', 'That is the hundreds digit, not the tens.', 'The tens place is the second digit from the right.'],
        ['8', 'That is the ones digit, not the tens.', 'Read place value right to left.'],
        ['658', 'That is the whole number, not a digit.', 'Identify just the tens-place digit.'],
      ],
    },
    {
      prompt: 'What is 47 + 26?',
      correct: '73',
      wrong: [
        ['63', 'That forgets to carry the ten from 7 + 6.', 'Stack the addition vertically and carry where needed.'],
        ['74', 'That is one too many — likely a carrying slip.', 'Re-check the ones column: 7 + 6 = 13.'],
        ['613', 'That sticks the digits together without combining columns.', 'Add ones to ones, tens to tens, then carry.'],
      ],
    },
    {
      prompt: 'What is 91 - 37?',
      correct: '54',
      wrong: [
        ['64', 'That forgets to borrow from the tens column.', 'Borrow once from the 9 to subtract in the ones column.'],
        ['44', 'That borrows twice by mistake.', 'Only one borrow is needed here.'],
        ['128', 'That adds the two numbers instead of subtracting.', 'Read the operator: subtraction takes the second from the first.'],
      ],
    },
    {
      prompt: 'What is 6 × 8?',
      correct: '48',
      wrong: [
        ['42', 'That is 6 × 7, off by one row of 6.', 'Use the times table for 6 × 8 specifically.'],
        ['56', 'That is 7 × 8, off by one row of 8.', 'Check both factors before computing.'],
        ['14', 'That adds 6 + 8 instead of multiplying.', 'Multiplication is repeated addition: eight groups of six.'],
      ],
    },
    {
      prompt: 'What is 42 ÷ 6?',
      correct: '7',
      wrong: [
        ['6', 'That uses the divisor itself rather than the quotient.', 'Ask: how many sixes fit into 42?'],
        ['8', 'That overshoots: 8 × 6 = 48, not 42.', 'Multiply your guess by 6 to check.'],
        ['36', 'That gives the product 6 × 6, not the quotient.', 'Division asks how many groups of 6 fit into 42.'],
      ],
    },
    {
      prompt: 'Which is larger: 2/3 or 3/5?',
      correct: '2/3',
      wrong: [
        ['3/5', '3/5 = 9/15 and 2/3 = 10/15, so 2/3 is the larger fraction.', 'Find a common denominator and compare numerators.'],
        ['They are equal', '2/3 and 3/5 have different cross products (10 vs 9), so they are not equal.', 'Cross-multiply: 2×5 = 10 vs 3×3 = 9.'],
        ['Cannot tell', 'You have everything you need to compare these two fractions.', 'Use a common denominator or cross multiplication.'],
      ],
    },
    {
      prompt: 'Which number is greater: 0.8 or 0.75?',
      correct: '0.8',
      wrong: [
        ['0.75', '0.8 = 0.80 and 0.80 > 0.75 because 80 hundredths beats 75 hundredths.', 'Write both decimals to the same place value before comparing.'],
        ['They are equal', '0.8 and 0.75 are not equal — 0.80 ≠ 0.75.', 'Line up the decimals to compare.'],
        ['Cannot tell', 'You have enough information to compare these decimals directly.', 'Pad with a trailing zero: 0.80 vs 0.75.'],
      ],
    },
    {
      prompt: 'What is the area of a rectangle with sides 7 and 3?',
      correct: '21',
      wrong: [
        ['10', 'That adds the sides — area requires multiplication.', 'Use length × width for rectangle area.'],
        ['20', 'That computes perimeter — 2(7) + 2(3) = 20.', 'Area and perimeter use different formulas.'],
        ['7', 'That picks just the length.', 'Area combines both side lengths.'],
      ],
    },
    {
      prompt: 'What is the perimeter of a rectangle with sides 9 and 4?',
      correct: '26',
      wrong: [
        ['36', 'That computes area (9 × 4), not perimeter.', 'Perimeter is the sum of all four sides.'],
        ['13', 'That adds the two sides only once — perimeter needs both pairs.', 'Use 2(l + w) for perimeter.'],
        ['18', 'That doubles only one side.', 'Double both length and width and add.'],
      ],
    },
    {
      prompt: 'If 2 pencils cost $6, how much do 4 pencils cost at the same rate?',
      correct: '$12',
      wrong: [
        ['$8', 'That adds $2 instead of doubling the price.', 'At the same rate, doubling the pencils doubles the cost.'],
        ['$10', 'That adds $4 — but the cost scales with the number of pencils.', 'Find the unit price first, then multiply.'],
        ['$24', 'That doubles twice — once is enough since 4 is double 2.', '2 × $6 = $12.'],
      ],
    },
    {
      prompt: 'What is -5 + 9?',
      correct: '4',
      wrong: [
        ['-4', 'That keeps the negative sign — but 9 outweighs 5, so the result is positive.', 'Compare magnitudes: 9 > 5, so the answer is positive.'],
        ['14', 'That adds magnitudes and ignores the negative sign.', 'Subtract magnitudes when signs differ.'],
        ['-14', 'That adds both as negatives — but only one is negative.', 'On a number line, start at -5 and move 9 right.'],
      ],
    },
    {
      prompt: 'If x = 3, what is 2x + 5?',
      correct: '11',
      wrong: [
        ['8', 'That computes 2 + 3 + 5 instead of 2 × 3 + 5.', 'Multiply 2 by x first, then add 5.'],
        ['10', 'That is 2 × 5, ignoring the +5 constant.', 'Use x = 3 in the expression as written.'],
        ['13', 'That overshoots by 2 — likely a misread of the coefficient.', '2(3) + 5 = 6 + 5 = 11.'],
      ],
    },
    {
      prompt: 'Solve x + 8 = 15.',
      correct: '7',
      wrong: [
        ['23', 'That adds 8 instead of subtracting it from both sides.', 'Subtract 8 from both sides to isolate x.'],
        ['8', 'That repeats the constant — but x is the unknown to be solved for.', 'Solve: x = 15 - 8 = 7.'],
        ['15', 'That copies the right-hand side without solving for x.', 'Move the +8 to the other side as -8.'],
      ],
    },
    {
      prompt: 'A line crosses the y-axis at 2 and rises 1 for every 1 right. Which equation fits?',
      correct: 'y = x + 2',
      wrong: [
        ['y = 2x', 'That has slope 2 — the description says rise 1 for run 1, so slope = 1.', 'Read slope and intercept separately: slope is rise/run.'],
        ['y = x - 2', 'That has the wrong intercept — the line crosses the y-axis at +2, not −2.', 'Check both slope and intercept from the description.'],
        ['x + y = 2', 'That has slope −1, not +1.', 'Rewrite the form to y = mx + b and compare.'],
      ],
    },
    {
      prompt: 'What is 1/4 + 1/2?',
      correct: '3/4',
      wrong: [
        ['2/6', 'That adds numerators and denominators separately, which is not how fractions add.', 'Convert to a common denominator first.'],
        ['1/2', 'That ignores the 1/4 term.', '1/4 + 1/2 = 1/4 + 2/4 = 3/4.'],
        ['1/6', 'That multiplies the denominators instead of finding a common denominator.', 'Use 4 as the common denominator.'],
      ],
    },
    {
      prompt: 'What is 2.5 + 1.3?',
      correct: '3.8',
      wrong: [
        ['3.7', 'That is one tenth too few — recheck the tenths column.', 'Line up decimals and add column by column.'],
        ['38', 'That drops the decimal point.', 'Place the decimal point in the same column as the addends.'],
        ['4.0', 'That overshoots by two tenths.', '2.5 + 1.3 = 3.8.'],
      ],
    },
    {
      prompt: 'How many centimeters are in 2 meters?',
      correct: '200',
      wrong: [
        ['20', 'That uses 10 cm per meter instead of 100.', '1 meter = 100 centimeters.'],
        ['2000', 'That uses 1000 cm per meter — that is the conversion to millimeters, not centimeters.', '1 meter = 100 cm; 2 m = 200 cm.'],
        ['2', 'That keeps the meter value without converting.', 'Multiply by the cm-per-meter factor.'],
      ],
    },
    {
      prompt: 'What is the volume of a box 3 by 2 by 4?',
      correct: '24',
      wrong: [
        ['9', 'That adds the three side lengths — volume needs multiplication.', 'Volume of a box is length × width × height.'],
        ['14', 'That mixes up the dimensions or applies surface-area logic.', 'Multiply all three dimensions.'],
        ['6', 'That uses only two of the three dimensions.', 'A box has three dimensions to multiply.'],
      ],
    },
    {
      prompt: 'What is the mean of 4, 6, and 8?',
      correct: '6',
      wrong: [
        ['4', 'That picks the smallest value — the mean averages all three.', 'Add all values then divide by the count.'],
        ['8', 'That picks the largest value — the mean is the average.', 'Sum: 4 + 6 + 8 = 18; 18 ÷ 3 = 6.'],
        ['18', 'That is the sum — divide by 3 to get the mean.', 'Mean = sum ÷ count.'],
      ],
    },
  ]

  // Pad to 50 by repeating earlier prompts (preserves the original 50-item shape).
  const prompts: Array<{ prompt: string; correct: string; wrong: string[][] }> = []
  for (let i = 0; prompts.length < 50; i++) {
    prompts.push(skillBank[i % skillBank.length])
  }

  return buildTemplateCourse('Mathematics', 30801, 'Eureka Math Foundations 3rd–8th grade', 'Foundation skill check', prompts)
}

export function makeEurekaMath38Quiz(): Question[] {
  // Each prompt has its own skill-specific distractor diagnoses.
  const skillBank: Array<{
    prompt: string
    correct: string
    wrong: [string, string, string][]
  }> = [
    {
      prompt: 'What is 3/4 of 20?',
      correct: '15',
      wrong: [
        ['12', 'That computes 3/5 of 20, mixing up the denominator.', 'Multiply: (3/4) × 20 = 15.'],
        ['17', 'That overshoots by 2 — likely a setup slip.', '(3 × 20) ÷ 4 = 15.'],
        ['80', 'That multiplies 4 × 20 instead of taking three quarters.', 'Take 1/4 of 20 first (which is 5), then multiply by 3.'],
      ],
    },
    {
      prompt: 'What is 0.6 × 50?',
      correct: '30',
      wrong: [
        ['3', 'That places the decimal one position too far left.', '0.6 × 50 has one decimal place in the product.'],
        ['56', 'That adds 0.6 + 50 (approximately) instead of multiplying.', 'Multiply: 0.6 × 50 = 30.'],
        ['20', 'That uses 0.4 instead of 0.6.', 'Re-read the multiplier: it is 0.6, not 0.4.'],
      ],
    },
    {
      prompt: 'Solve 5x = 35.',
      correct: '7',
      wrong: [
        ['40', 'That adds 5 to 35 instead of dividing.', 'Divide both sides by 5 to isolate x.'],
        ['30', 'That subtracts 5 from 35 instead of dividing.', 'Divide both sides by 5 — operations balance, but the operation is division here.'],
        ['5', 'That picks the coefficient — but x is the unknown to solve for.', 'x = 35 ÷ 5 = 7.'],
      ],
    },
    {
      prompt: 'What is the area of a triangle with base 10 and height 6?',
      correct: '30',
      wrong: [
        ['60', 'That gives base × height — forgetting the 1/2 factor for triangles.', 'Triangle area is (1/2) × base × height.'],
        ['16', 'That adds base and height — area needs multiplication and the 1/2 factor.', 'Compute (1/2)(10)(6) = 30.'],
        ['20', 'That divides 60 by 3 instead of by 2.', 'Triangles use a factor of 1/2, not 1/3.'],
      ],
    },
    {
      prompt: 'What is the unit rate if 24 miles are traveled in 3 hours?',
      correct: '8 miles per hour',
      wrong: [
        ['72 mph', 'That multiplies 24 × 3 instead of dividing.', 'Unit rate = total miles ÷ total hours.'],
        ['3 mph', 'That picks the time (3 hours) instead of computing the rate.', 'Divide 24 miles by 3 hours.'],
        ['21 mph', 'That subtracts 3 from 24 instead of dividing.', 'Use division for rates: 24 ÷ 3 = 8.'],
      ],
    },
    {
      prompt: 'What is -7 + 12?',
      correct: '5',
      wrong: [
        ['19', 'That ignores the negative sign — but -7 + 12 partially cancels.', 'On a number line, start at -7 and move 12 right.'],
        ['-5', 'That keeps the result negative — but 12 outweighs 7, so the answer is positive.', '12 > 7, so the sum is positive.'],
        ['12', 'That ignores the -7 entirely.', 'Combine both terms with their signs.'],
      ],
    },
    {
      prompt: 'What is the perimeter of a square with side length 8?',
      correct: '32',
      wrong: [
        ['64', 'That computes area (8 × 8), not perimeter.', 'Perimeter of a square is 4 × side.'],
        ['16', 'That uses only two sides — a square has four.', 'Multiply side by 4 for square perimeter.'],
        ['8', 'That picks just one side, not the full perimeter.', 'Add all four equal sides: 4 × 8 = 32.'],
      ],
    },
    {
      prompt: 'Which fraction is equivalent to 6/8?',
      correct: '3/4',
      wrong: [
        ['6/16', 'That doubles only the denominator — equivalent fractions scale both top and bottom equally.', 'Divide numerator and denominator by 2 to simplify 6/8 to 3/4.'],
        ['2/3', '2/3 is not equivalent to 6/8 — cross-multiply to check.', 'Simplify 6/8 by dividing both by their GCF of 2.'],
        ['8/6', 'That inverts the fraction.', '6/8 = 3/4, not its reciprocal.'],
      ],
    },
    {
      prompt: 'What is 15% of 200?',
      correct: '30',
      wrong: [
        ['15', 'That picks the percent as a number, ignoring the base.', '15% of 200 = 0.15 × 200 = 30.'],
        ['40', 'That overshoots — likely used 20% instead of 15%.', 'Multiply 0.15 by 200.'],
        ['200', 'That uses the base unchanged.', 'A percent of a quantity is less than the quantity (unless > 100%).'],
      ],
    },
    {
      prompt: 'Solve x/4 = 9.',
      correct: '36',
      wrong: [
        ['13', 'That adds 4 to 9 instead of multiplying.', 'Multiply both sides by 4 to isolate x.'],
        ['5', 'That subtracts 4 from 9.', 'Use the inverse operation: division undoes by multiplication.'],
        ['45', 'That multiplies 9 by 5 instead of by 4.', 'x = 9 × 4 = 36.'],
      ],
    },
  ]

  // Cycle each prompt 5 times to produce 50 items (matching the original layout).
  const prompts: Array<{ prompt: string; correct: string; wrong: string[][] }> = []
  skillBank.forEach((entry) => {
    for (let r = 0; r < 5; r++) prompts.push(entry)
  })

  return buildTemplateCourse('Mathematics', 30901, 'Eureka Math 3rd–8th grade', 'Mixed Eureka skill check', prompts)
}

export function makeIllustrativeMath678Quiz(): Question[] {
  // Hand-authored prompts with per-prompt distractor diagnoses (replaces the previous
  // DEFAULT_FLAW filler that used 'Not enough information', '0', and 'A nearby but
  // wrong value' for every item).
  const skillBank: Array<{
    prompt: string
    correct: string
    wrong: [string, string, string][]
  }> = [
    {
      prompt: 'A recipe uses 3 cups of flour for 2 cakes. How many cups are needed for 6 cakes?',
      correct: '9',
      wrong: [
        ['6', 'That uses the new cake count as the answer directly, ignoring the ratio.', 'Scale: 6 ÷ 2 = 3 batches, so use 3 × 3 = 9 cups.'],
        ['12', 'That doubles the original 6 cups instead of tripling.', 'Six cakes is three times two, so multiply 3 by 3.'],
        ['4', 'That averages the two quantities instead of scaling.', 'Use a proportion: 3 cups / 2 cakes = x / 6 cakes.'],
      ],
    },
    {
      prompt: 'A tank loses 4 liters of water each minute. What is the change after 7 minutes?',
      correct: '-28 liters',
      wrong: [
        ['28 liters', 'That gives the magnitude but loses the sign — loss is negative change.', 'A loss is a negative change in volume.'],
        ['-11 liters', 'That adds 4 + 7 instead of multiplying.', 'Multiply the rate by the time: -4 × 7 = -28.'],
        ['-4 liters', 'That gives the rate, not the total after 7 minutes.', 'Multiply the per-minute rate by 7 minutes.'],
      ],
    },
    {
      prompt: 'What is 5/6 + 1/3?',
      correct: '7/6',
      wrong: [
        ['6/9', 'That adds numerators and denominators separately — not how fractions add.', 'Find a common denominator first.'],
        ['1', 'That rounds 7/6 down to 1 instead of leaving the improper fraction.', '5/6 + 2/6 = 7/6.'],
        ['1/2', 'That mixes up the operation or denominators.', 'Convert 1/3 to 2/6, then add: 5/6 + 2/6 = 7/6.'],
      ],
    },
    {
      prompt: 'If y = 4x - 3, what is y when x = 5?',
      correct: '17',
      wrong: [
        ['12', 'That subtracts 3 from x first instead of computing 4x.', 'Multiply first: 4 × 5 = 20, then subtract 3.'],
        ['23', 'That adds 3 instead of subtracting.', 'Re-read the rule: y = 4x − 3, not 4x + 3.'],
        ['9', 'That uses 3x − 3 instead of 4x − 3.', 'Use the coefficient 4 on x.'],
      ],
    },
    {
      prompt: 'Solve 2x + 9 = 25.',
      correct: '8',
      wrong: [
        ['16', 'That subtracts 9 from 25 but forgets to divide by 2.', 'Subtract 9 first, then divide both sides by 2.'],
        ['17', 'That adds 9 to 25 instead of subtracting.', 'Isolate x: 2x = 25 − 9 = 16, then x = 8.'],
        ['7', 'That is one too few — likely an arithmetic slip.', '(25 − 9) ÷ 2 = 8.'],
      ],
    },
    {
      prompt: 'A rectangular prism measures 3 by 4 by 5. What is its volume?',
      correct: '60',
      wrong: [
        ['12', 'That multiplies only two dimensions (3 × 4) — a prism has three.', 'Volume = l × w × h.'],
        ['47', 'That computes part of the surface area, not volume.', 'Use length × width × height for volume.'],
        ['12 cubic units (as a sum)', 'That adds 3 + 4 + 5 — volume needs multiplication, not addition.', 'Volume = 3 × 4 × 5 = 60.'],
      ],
    },
    {
      prompt: 'What is the area of a triangle with base 12 and height 9?',
      correct: '54',
      wrong: [
        ['108', 'That gives base × height — triangles need the 1/2 factor.', 'Triangle area = (1/2) × base × height.'],
        ['21', 'That adds base and height — area is multiplicative.', '(1/2)(12)(9) = 54.'],
        ['27', 'That used base/2 only, missing the height factor.', 'Multiply (1/2) × 12 × 9.'],
      ],
    },
    {
      prompt: 'Which point is on the line y = x + 2?',
      correct: '(3, 5)',
      wrong: [
        ['(5, 3)', 'That swaps x and y — substituting gives 3 = 5 + 2, which is false.', 'Plug in x and check y matches y = x + 2.'],
        ['(2, 3)', 'For x = 2, y should be 4, not 3.', 'Substitute x = 2: y = 4, so (2, 4) is on the line, not (2, 3).'],
        ['(0, 0)', 'For x = 0, y = 2, not 0.', 'The y-intercept is 2, not 0.'],
      ],
    },
    {
      prompt: 'What is the mean of 8, 10, and 12?',
      correct: '10',
      wrong: [
        ['12', 'That picks the largest value — mean averages all three.', 'Mean = (8 + 10 + 12) ÷ 3.'],
        ['30', 'That gives the sum — divide by the count to get the mean.', '30 ÷ 3 = 10.'],
        ['8', 'That picks the smallest value — mean is the middle of the three.', 'Add the three values and divide by 3.'],
      ],
    },
    {
      prompt: 'What is the distance between 0 and -7 on a number line?',
      correct: '7',
      wrong: [
        ['-7', 'That gives the coordinate of the second point, not the distance.', 'Distance on a number line is always positive.'],
        ['0', 'That uses the first point — distance compares the two.', 'Use |0 − (−7)| = 7.'],
        ['14', 'That doubles the distance.', 'Subtract: 0 − (−7) = 7.'],
      ],
    },
  ]

  const prompts: Array<{ prompt: string; correct: string; wrong: string[][] }> = []
  skillBank.forEach((entry) => {
    for (let r = 0; r < 5; r++) prompts.push(entry)
  })

  return buildTemplateCourse('Mathematics', 31001, 'Illustrative Mathematics 6th–8th grade', 'Illustrative skill check', prompts)
}

export function makeHighSchoolBiologyNGSSQuiz(): Question[] {
  const skillBank: Array<{
    prompt: string
    correct: string
    wrong: [string, string, string][]
  }> = [
    {
      prompt: 'Which organelle is most associated with ATP production in eukaryotic cells?',
      correct: 'Mitochondria',
      wrong: [
        ['Ribosomes', 'Ribosomes build proteins; they do not produce ATP.', 'ATP is produced through cellular respiration in mitochondria.'],
        ['Nucleus', 'The nucleus stores DNA; ATP synthesis happens elsewhere.', 'Look for the organelle tied to cellular respiration.'],
        ['Cell wall', 'Cell walls provide structural support and are not involved in energy production.', 'ATP is generated in mitochondria via the electron transport chain.'],
      ],
    },
    {
      prompt: 'What is the role of ribosomes?',
      correct: 'They build proteins',
      wrong: [
        ['They store genetic material', 'DNA storage is the nucleus’s role, not the ribosome’s.', 'Ribosomes translate mRNA into proteins.'],
        ['They generate ATP', 'ATP generation happens in mitochondria, not ribosomes.', 'Ribosomes synthesize proteins.'],
        ['They digest waste', 'Lysosomes handle digestion, not ribosomes.', 'Ribosomes translate mRNA into proteins.'],
      ],
    },
    {
      prompt: 'In photosynthesis, plants use sunlight mainly to:',
      correct: 'Convert carbon dioxide and water into sugars',
      wrong: [
        ['Generate heat for the plant', 'Plants do not use sunlight primarily for thermoregulation.', 'Photosynthesis converts light energy into chemical energy stored in sugars.'],
        ['Break down sugars into CO₂', 'That describes cellular respiration, the reverse of photosynthesis.', 'Photosynthesis builds sugars from CO₂ and water.'],
        ['Reproduce', 'Sunlight supports growth, not reproduction directly.', 'Photosynthesis is about producing food (sugars) for the plant.'],
      ],
    },
    {
      prompt: 'What is a gene?',
      correct: 'A segment of DNA that carries instructions for a trait or product',
      wrong: [
        ['A whole chromosome', 'A chromosome contains many genes, but a gene is a smaller segment.', 'A gene is a specific stretch of DNA coding for a trait or protein.'],
        ['A type of protein', 'Genes code for proteins; they are not themselves proteins.', 'Genes are made of DNA, not protein.'],
        ['A random cell feature', 'Genes have a specific functional definition.', 'A gene is a DNA segment with hereditary information.'],
      ],
    },
    {
      prompt: 'What process produces body cells for growth and repair?',
      correct: 'Mitosis',
      wrong: [
        ['Meiosis', 'Meiosis produces gametes (sperm/egg), not body cells.', 'Body-cell division for growth and repair is mitosis.'],
        ['Photosynthesis', 'Photosynthesis is energy production in plants, not cell division.', 'Mitosis splits a body cell into two identical daughter cells.'],
        ['Fertilization', 'Fertilization combines gametes; it is not how body cells multiply.', 'Mitosis is the body-cell division process.'],
      ],
    },
    {
      prompt: 'Why does biodiversity matter in an ecosystem?',
      correct: 'It helps ecosystems stay resilient when conditions change',
      wrong: [
        ['Because more species means more competition only', 'Biodiversity provides resilience and multiple ecological roles, not just competition.', 'Diverse ecosystems can recover from disturbances more readily.'],
        ['It speeds up extinction', 'Biodiversity protects against extinction, not the reverse.', 'Greater diversity tends to buffer against losses.'],
        ['It has no measurable effect', 'Ecosystem science shows clear effects of biodiversity on stability.', 'Biodiversity supports resilience and ecosystem services.'],
      ],
    },
    {
      prompt: 'What is natural selection?',
      correct: 'Inherited traits that improve survival or reproduction become more common over time',
      wrong: [
        ['Animals decide which traits to pass on', 'Selection is not a conscious choice by individuals.', 'It is the differential reproductive success of inherited traits.'],
        ['All traits are passed equally', 'Selection is precisely about unequal reproductive success.', 'Traits that help survival or reproduction increase in frequency.'],
        ['Only big changes count', 'Natural selection can act on small variations over many generations.', 'Small advantages accumulate over time.'],
      ],
    },
    {
      prompt: 'What is homeostasis?',
      correct: 'Maintaining stable internal conditions',
      wrong: [
        ['Growing larger over time', 'Growth is not the same as maintaining stability.', 'Homeostasis is about keeping internal conditions in range.'],
        ['Random internal changes', 'Homeostasis is regulated, not random.', 'It is the active maintenance of stable conditions.'],
        ['Reproduction', 'Reproduction is producing offspring, not internal regulation.', 'Homeostasis governs temperature, pH, etc.'],
      ],
    },
    {
      prompt: 'In a food web, an herbivore is a:',
      correct: 'Consumer that eats producers',
      wrong: [
        ['Producer', 'Producers are plants/autotrophs; herbivores consume them.', 'Herbivores are primary consumers.'],
        ['Apex predator', 'Apex predators are typically carnivores at the top of the food chain.', 'Herbivores eat plants, not other animals.'],
        ['Decomposer', 'Decomposers break down dead material; herbivores eat living plants.', 'Herbivores are plant-eaters.'],
      ],
    },
    {
      prompt: 'What does a Punnett square help predict?',
      correct: 'Possible inheritance outcomes',
      wrong: [
        ['How fast a cell divides', 'Cell-division rate is not what Punnett squares model.', 'Punnett squares model gene combinations from parents.'],
        ['The number of cells in a body', 'Punnett squares are about genetics, not cell counts.', 'They predict offspring genotype probabilities.'],
        ['Photosynthesis efficiency', 'Photosynthesis is unrelated to genetic crosses.', 'Punnett squares are an inheritance tool.'],
      ],
    },
  ]

  const prompts: Array<{ prompt: string; correct: string; wrong: string[][] }> = []
  skillBank.forEach((entry) => {
    for (let r = 0; r < 5; r++) prompts.push(entry)
  })

  return buildTemplateCourse('AP', 31101, 'High school biology - NGSS', 'NGSS biology skill check', prompts)
}

export function makeHighSchoolPhysicsNGSSQuiz(): Question[] {
  const skillBank: Array<{
    prompt: string
    correct: string
    wrong: [string, string, string][]
  }> = [
    {
      prompt: 'What is speed?',
      correct: 'Distance divided by time',
      wrong: [
        ['Distance times time', 'Multiplying distance by time gives no standard physical quantity.', 'Speed is a rate: distance per unit time.'],
        ['Time divided by distance', 'That inverts the definition — it is the reciprocal of speed.', 'Speed = distance / time.'],
        ['Mass times acceleration', 'That is force (Newton’s second law), not speed.', 'Speed is purely kinematic: how far per how long.'],
      ],
    },
    {
      prompt: 'If a 2 kg object accelerates at 3 m/s^2, what is the net force?',
      correct: '6 N',
      wrong: [
        ['5 N', 'That adds mass and acceleration instead of multiplying.', 'Use F = m × a.'],
        ['1.5 N', 'That divides mass by acceleration instead of multiplying.', 'F = ma = 2 × 3 = 6 N.'],
        ['9 N', 'That over-counts — recheck the multiplication.', 'F = 2 × 3 = 6 N.'],
      ],
    },
    {
      prompt: 'What happens to kinetic energy when speed increases?',
      correct: 'It increases',
      wrong: [
        ['It decreases', 'KE = (1/2)mv², so faster speed means more kinetic energy.', 'KE rises with the square of speed.'],
        ['It stays the same', 'Kinetic energy depends on speed, so it cannot stay constant.', 'KE = (1/2)mv²: speed change changes KE.'],
        ['It becomes negative', 'Kinetic energy is never negative for real objects.', 'KE = (1/2)mv² ≥ 0.'],
      ],
    },
    {
      prompt: 'What kind of wave needs a medium to travel?',
      correct: 'A mechanical wave',
      wrong: [
        ['An electromagnetic wave', 'EM waves travel through vacuum — they do not need a medium.', 'Sound and water waves need a medium; light does not.'],
        ['A light wave', 'Light is electromagnetic and travels without a medium.', 'Mechanical waves need particles to vibrate.'],
        ['Any wave', 'Some waves (EM) propagate through vacuum.', 'Only mechanical waves require a medium.'],
      ],
    },
    {
      prompt: 'What is momentum?',
      correct: 'Mass multiplied by velocity',
      wrong: [
        ['Mass divided by velocity', 'That inverts the formula.', 'Momentum p = m × v.'],
        ['Velocity squared', 'That is related to kinetic energy, not momentum.', 'Momentum is linear in velocity.'],
        ['Force times distance', 'That is work, not momentum.', 'Momentum = mass × velocity.'],
      ],
    },
    {
      prompt: 'If two equal forces act in opposite directions, the net force is:',
      correct: '0',
      wrong: [
        ['The sum of magnitudes', 'Opposite directions cancel, they do not add.', 'Vector addition with opposite directions yields zero.'],
        ['The larger force', 'Equal forces cancel exactly.', 'Equal and opposite forces sum to zero.'],
        ['Doubled', 'Doubling occurs when forces align, not oppose.', 'Opposite vectors cancel.'],
      ],
    },
    {
      prompt: 'Which quantity is conserved in an isolated collision?',
      correct: 'Momentum',
      wrong: [
        ['Kinetic energy alone', 'KE is conserved only in elastic collisions; momentum is conserved in all isolated collisions.', 'Momentum conservation holds regardless of collision type.'],
        ['Position', 'Position changes during collisions.', 'Look for the dynamical conserved quantity.'],
        ['Mass density', 'Mass density is not the conserved quantity in this context.', 'Total momentum (vector) is conserved.'],
      ],
    },
    {
      prompt: 'What does a circuit need in order to keep charge flowing?',
      correct: 'A complete closed path',
      wrong: [
        ['A broken wire', 'A broken wire stops the current.', 'Current requires a continuous loop.'],
        ['Only a power source', 'A power source alone with no loop will not drive current.', 'Both a source and a closed path are needed.'],
        ['No resistance at all', 'Real circuits work with resistance; the requirement is a closed loop.', 'Closed circuit is the key.'],
      ],
    },
    {
      prompt: 'What happens to the frequency of a wave if more crests pass each second?',
      correct: 'The frequency increases',
      wrong: [
        ['It decreases', 'More crests per second is the definition of higher frequency.', 'Frequency = crests per second.'],
        ['It stays the same', 'Frequency changes when the rate of crests changes.', 'More crests/sec → higher frequency.'],
        ['It becomes silent', 'Frequency is a measurable quantity, not a yes/no state.', 'Higher crest rate is higher frequency.'],
      ],
    },
    {
      prompt: 'What is gravitational potential energy most closely tied to?',
      correct: 'Position in a gravitational field',
      wrong: [
        ['Color of the object', 'Color does not affect gravitational PE.', 'PE depends on height and field strength.'],
        ['Speed only', 'Speed relates to kinetic energy, not gravitational potential.', 'Gravitational PE depends on position (e.g., height).'],
        ['Temperature', 'Temperature ties to thermal energy, not gravitational PE.', 'Gravitational PE = mgh.'],
      ],
    },
  ]

  const prompts: Array<{ prompt: string; correct: string; wrong: string[][] }> = []
  skillBank.forEach((entry) => {
    for (let r = 0; r < 5; r++) prompts.push(entry)
  })

  return buildTemplateCourse('AP', 31201, 'High school physics - NGSS', 'NGSS physics skill check', prompts)
}

export function makeWorldHistoryOriginsQuiz(): Question[] {
  const skillBank: Array<{
    prompt: string
    correct: string
    wrong: [string, string, string][]
  }> = [
    {
      prompt: 'Why was the development of agriculture a major turning point?',
      correct: 'It supported permanent settlements and larger populations',
      wrong: [
        ['It made hunting and gathering more difficult', 'Agriculture changed what societies did, not the difficulty of older practices.', 'Look for the structural effect on settlement and population.'],
        ['It eliminated trade between regions', 'Agriculture actually increased the surplus that fueled trade.', 'Permanent settlements with surplus food enabled trade.'],
        ['It only affected diet', 'Agriculture changed labor, settlement patterns, and political structures, not just diet.', 'Consider population, settlement, and labor reorganization.'],
      ],
    },
    {
      prompt: 'What do historians usually mean by a civilization?',
      correct: 'A complex society with organized institutions and shared systems',
      wrong: [
        ['Any group of people living near each other', 'Proximity alone does not make a civilization.', 'Civilizations have institutions, writing or record-keeping, and complex labor.'],
        ['A single ruling family', 'A family is a kinship unit, not a civilization.', 'Civilizations include legal, religious, and economic institutions.'],
        ['A tribe with a leader', 'Tribes are simpler social units than civilizations.', 'Civilizations have layered institutions and specializations.'],
      ],
    },
    {
      prompt: 'Why were river valleys important to early states?',
      correct: 'They supported farming, trade, and dense settlement',
      wrong: [
        ['They were the only place to find rocks', 'Rocks are widely available; rivers offered something different.', 'Rivers enabled irrigation, transport, and concentrated population.'],
        ['They prevented contact between regions', 'Rivers actually enabled contact and trade.', 'Rivers connect upstream and downstream communities.'],
        ['They were sites of frequent earthquakes', 'Earthquake risk is unrelated to early state formation patterns.', 'Look for agricultural and trade benefits.'],
      ],
    },
    {
      prompt: 'What is one major effect of trade networks?',
      correct: 'They spread goods, ideas, and technologies between regions',
      wrong: [
        ['They closed regions off from each other', 'Trade networks did the opposite — they opened connections.', 'Trade routes carry both material goods and cultural exchange.'],
        ['They had no effect on culture', 'Cultural diffusion via trade is well documented.', 'Trade carries religions, languages, technologies.'],
        ['They only moved gold', 'Trade moved many commodities and intangibles.', 'Goods, ideas, religions, and diseases all moved along trade routes.'],
      ],
    },
    {
      prompt: 'How did major belief systems shape societies?',
      correct: 'They influenced laws, values, and social organization',
      wrong: [
        ['They only affected what people ate', 'Belief systems shape much more than diet (though they can touch it).', 'Look at law, kinship, governance, and ethics.'],
        ['They had no measurable effect', 'World historians document major impacts.', 'Religious and philosophical systems shaped legal codes and rulership.'],
        ['They only mattered in temples', 'Beliefs spread into civic, political, and family life.', 'Belief systems organized whole societies, not just rituals.'],
      ],
    },
    {
      prompt: 'Why did empires build roads and communication systems?',
      correct: 'To control territory and move people, goods, and information',
      wrong: [
        ['For decoration', 'Roads served strategic and economic ends, not aesthetics.', 'Empires invested in infrastructure for control and logistics.'],
        ['To slow down their armies', 'Roads sped up army movement, not slowed it.', 'Speed of military deployment was a key reason.'],
        ['They never did', 'Empires from Persia to Rome to Inca built extensive road networks.', 'Major empires invested heavily in transport.'],
      ],
    },
    {
      prompt: 'What was a major effect of the Columbian Exchange?',
      correct: 'Plants, animals, diseases, and goods moved between hemispheres',
      wrong: [
        ['Only gold moved between continents', 'Crops, livestock, and diseases also moved across the Atlantic.', 'The Columbian Exchange spanned biology, agriculture, and disease.'],
        ['It had no effect on diets', 'Foods like potatoes, tomatoes, and maize transformed Old World diets.', 'New foods reshaped global cuisines and farming.'],
        ['Nothing moved at all', 'A massive transfer of biota and goods occurred.', 'The exchange transformed both hemispheres.'],
      ],
    },
    {
      prompt: 'Why did industrialization transform societies?',
      correct: 'It changed production, labor, cities, and economic power',
      wrong: [
        ['It made farming the only job', 'Industrialization reduced agricultural employment, not increased it.', 'It shifted labor from farms to factories.'],
        ['It had no effect on cities', 'Urbanization was a defining feature of industrialization.', 'Cities grew rapidly during industrialization.'],
        ['Only one country changed', 'Industrialization spread globally with major effects.', 'Industrial change reshaped multiple societies and economies.'],
      ],
    },
    {
      prompt: 'What is nationalism?',
      correct: 'A strong sense of shared political identity with a nation',
      wrong: [
        ['Loyalty to a single family', 'Family loyalty is dynasticism, not nationalism.', 'Nationalism is a collective political identity.'],
        ['Hatred of all foreigners', 'Xenophobia can accompany nationalism but is not its definition.', 'Nationalism is identification with a nation.'],
        ['Belief in only one religion', 'Religious identity is distinct from national identity.', 'Nationalism focuses on the nation, not necessarily a faith.'],
      ],
    },
    {
      prompt: 'Why do world historians compare regions?',
      correct: 'To see patterns, differences, and connections across time',
      wrong: [
        ['To rank one region as best', 'Comparative history avoids simple rankings.', 'Comparison aims at patterns, not winners.'],
        ['Because all regions are identical', 'Comparison highlights differences as well as similarities.', 'Comparison illuminates variation and shared dynamics.'],
        ['Only to entertain readers', 'Comparison serves analytical, not entertainment, purposes.', 'It reveals structural patterns and connections.'],
      ],
    },
  ]

  const prompts: Array<{ prompt: string; correct: string; wrong: string[][] }> = []
  skillBank.forEach((entry) => {
    for (let r = 0; r < 5; r++) prompts.push(entry)
  })

  return buildTemplateCourse('AP', 31301, 'World History Project - Origins to the Present', 'Origins skill check', prompts)
}

export function makeWorldHistory1750Quiz(): Question[] {
  const skillBank: Array<{
    prompt: string
    correct: string
    wrong: [string, string, string][]
  }> = [
    {
      prompt: 'Why is 1750 often used as a starting point in modern world history?',
      correct: 'Industrialization and accelerating global change gather speed around this era',
      wrong: [
        ['Because history stopped changing after 1750', 'Modern history starts there because change accelerates, not slows.', 'Look at industrialization and the global pace of change.'],
        ['Because all empires collapsed in 1750', 'No mass collapse of empires happened in 1750.', 'Periodization tracks new dynamics, not specific collapses.'],
        ['It is an arbitrary number', 'Historians choose 1750 because of substantive industrial and economic shifts.', 'Industrialization and global market integration are the substantive reasons.'],
      ],
    },
    {
      prompt: 'What was a major effect of the Industrial Revolution?',
      correct: 'Production shifted toward factories and mechanization',
      wrong: [
        ['Hand-craft methods replaced machines', 'Industrialization was the reverse — machines replaced hand methods.', 'Mechanization is a defining feature of industrialization.'],
        ['Cities shrank everywhere', 'Urbanization grew during industrialization.', 'Cities expanded as factories drew workers.'],
        ['No social changes occurred', 'Industrialization reshaped labor, family structure, and class.', 'Major social transformations accompanied industrialization.'],
      ],
    },
    {
      prompt: 'Why did imperial powers seek colonies in the 1800s?',
      correct: 'They wanted resources, markets, and strategic control',
      wrong: [
        ['To give resources away for free', 'Colonies extracted resources, not gave them away.', 'Imperial powers gained, not lost, from colonies.'],
        ['Because they ran out of land at home', 'Land availability was not the main driver.', 'Resources, markets, and strategic position drove imperialism.'],
        ['Only to spread one religion', 'Religious motivation existed but was secondary to economic and strategic factors.', 'Empire combined economic, strategic, and ideological motives.'],
      ],
    },
    {
      prompt: 'What is nationalism in a nineteenth-century context?',
      correct: 'A movement linking political power to a shared national identity',
      wrong: [
        ['A movement to abolish all governments', 'That describes anarchism, not nationalism.', 'Nationalism builds states around national identity.'],
        ['A purely religious movement', 'Nationalism is a political identity, not strictly religious.', 'Religion can intersect with nationalism but does not define it.'],
        ['A scientific theory', 'Nationalism is a political and cultural movement, not a scientific framework.', 'Nineteenth-century nationalism reorganized states and identities.'],
      ],
    },
    {
      prompt: 'Why was World War I so destructive?',
      correct: 'Industrial technology and mass mobilization expanded the scale of warfare',
      wrong: [
        ['Because armies refused to fight', 'WWI saw enormous mobilization, not refusal to fight.', 'Industrial technology made killing scale up dramatically.'],
        ['Because only one country participated', 'WWI involved many countries and was global.', 'Mass mobilization across many nations was the rule.'],
        ['It was a small regional war', 'WWI was a world war, not local.', 'The conflict spanned multiple continents and theatres.'],
      ],
    },
    {
      prompt: 'What was one major consequence of World War II?',
      correct: 'Global power shifted and decolonization accelerated',
      wrong: [
        ['Empires expanded everywhere', 'After WWII, empires contracted and decolonization spread.', 'Decolonization is a defining post-WWII pattern.'],
        ['Nothing structural changed', 'WWII profoundly reshaped global politics, economics, and societies.', 'Power shifted toward the US and USSR; colonies gained independence.'],
        ['Industry stopped worldwide', 'Industrial production grew, not stopped.', 'Postwar industry boomed in the surviving economies.'],
      ],
    },
    {
      prompt: 'What does decolonization mean?',
      correct: 'Former colonies gained independence from imperial rule',
      wrong: [
        ['Empires gained more colonies', 'Decolonization is the opposite — losing colonies.', 'Colonies became independent states.'],
        ['Borders disappeared', 'New national borders emerged with decolonization, they did not disappear.', 'Many new states formed from former colonies.'],
        ['Religion changed everywhere', 'Religious change is separate from decolonization.', 'Decolonization is a political transition.'],
      ],
    },
    {
      prompt: 'Why was the Cold War called "cold"?',
      correct: 'The superpowers avoided direct large-scale war with each other while competing globally',
      wrong: [
        ['It happened in cold climates', 'The name refers to the absence of direct hot war, not temperature.', 'The Cold War was global, not climate-defined.'],
        ['Both sides liked each other', 'The US and USSR were rivals, not friends.', 'The competition was intense but indirect.'],
        ['There was no competition', 'Massive military, economic, and ideological competition occurred.', 'Proxy wars and arms races defined the era.'],
      ],
    },
    {
      prompt: 'What is globalization?',
      correct: 'Growing cross-border connections in trade, communication, and culture',
      wrong: [
        ['Countries cutting themselves off from each other', 'That is the opposite — autarky or isolationism.', 'Globalization is increased interconnection.'],
        ['Only goods moving, not ideas', 'Globalization moves both goods and ideas, capital, and people.', 'It is multidimensional.'],
        ['A single world government', 'Globalization is connection, not consolidation under one government.', 'It refers to flows and networks, not unified rule.'],
      ],
    },
    {
      prompt: 'Why do historians study migration in the modern era?',
      correct: 'Population movement reshapes labor, cities, culture, and politics',
      wrong: [
        ['Because people never moved before 1750', 'Migration is ancient; modern migration is studied because of its scale and pace.', 'Modern migration involves industrial-era patterns and global flows.'],
        ['Only for genealogy', 'Migration is studied for many structural reasons beyond family history.', 'Labor markets, cities, politics, and culture are all reshaped.'],
        ['It has no effect on society', 'Migration is a major driver of social change.', 'It restructures economies, cities, and identities.'],
      ],
    },
  ]

  const prompts: Array<{ prompt: string; correct: string; wrong: string[][] }> = []
  skillBank.forEach((entry) => {
    for (let r = 0; r < 5; r++) prompts.push(entry)
  })

  return buildTemplateCourse('AP', 31401, 'World History Project - 1750 to the Present', 'Modern world skill check', prompts)
}
