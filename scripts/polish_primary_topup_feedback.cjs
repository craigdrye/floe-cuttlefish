const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const catalogDir = path.join(repoRoot, 'src/data/questionCatalog')

const replacements = new Map([
  ['You added instead of taking away.', (answer) => `${answer} comes from adding the amounts, but this question asks you to take one amount away.`],
  ['You added instead of subtracting.', (answer) => `${answer} is what you get by adding, but the story is asking for the difference.`],
  ['You added the numbers instead of subtracting.', (answer) => `${answer} uses the total of the numbers, but the question is asking how much is left or how far apart they are.`],
  ['You added the numbers instead of taking away.', (answer) => `${answer} treats the numbers as a total, but the action word here means take away.`],
  ['You subtracted instead of adding.', (answer) => `${answer} comes from taking away, but this question asks for the amounts together.`],
  ['You took away instead of adding.', (answer) => `${answer} is a take-away answer, but this prompt wants a joined total.`],
  ['This multiplies instead of dividing.', (answer) => `${answer} comes from making more groups, but division asks how many are in each group or how many groups fit.`],
  ['You multiplied instead of dividing.', (answer) => `${answer} grows the number by multiplying, but this question asks you to share or split it.`],
  ['You multiplied by 10 instead of dividing.', (answer) => `${answer} moves the number the wrong way; dividing by 10 should make it ten times smaller.`],
  ['You added 10 instead of multiplying by 10.', (answer) => `${answer} only adds one extra ten, but multiplying by 10 makes the whole number ten times as large.`],
  ['This skips a number in the pattern.', (answer) => `${answer} jumps past the next step in the pattern; follow the same change one move at a time.`],
  ['Ran is an action word, which is a verb.', (answer) => `${answer} names an action, so it is a verb rather than the kind of word the prompt is asking for.`],
  ['Sad is the opposite of happy.', (answer) => `${answer} points the other way from happy; a synonym should keep the same cheerful meaning.`],
  ['Tired is about being sleepy, not happy.', (answer) => `${answer} describes sleepiness, not the cheerful feeling asked for here.`],
  ['Tall is about height, not the opposite of big.', (answer) => `${answer} is about height; the prompt is looking for the size word that means not big.`],
  ['A period ends a telling sentence, not a question.', (answer) => `${answer} ends a statement; a question needs the mark that shows someone is asking something.`],
  ['An exclamation mark shows strong feeling, not a question.', (answer) => `${answer} shows excitement or strong feeling; this sentence is asking, so it needs a question mark.`],
  ['Words ending in x add -es, not just -s.', (answer) => `${answer} misses the spelling rule: words ending in x usually add -es so the word is sayable.`],
  ['You added the bottom numbers, but they should stay the same.', (answer) => `${answer} adds the denominators, but like fractions keep the same bottom number and only combine the tops.`],
  ['A bigger bottom number means smaller pieces.', (answer) => `${answer} has more pieces, but more equal pieces means each piece is smaller.`],
  ['One quarter is smaller than one half.', (answer) => `${answer} is one out of four equal pieces, which is smaller than one out of two.`],
  ['Two thirds is more than one half.', (answer) => `${answer} is more than half because two of three equal parts covers most of the whole.`],
  ['Three quarters is bigger than one half.', (answer) => `${answer} is three out of four equal pieces, which is more than half the shape.`],
  ['That is one more than the right answer.', (answer) => `${answer} is just one step too high; check the last count carefully.`],
  ['That is one less than the right answer.', (answer) => `${answer} is just one step too low; count the final item as well.`],
  ['That is the price, not the change.', (answer) => `${answer} repeats the cost, but change is the money left after paying.`],
  ['This is the number you divided by, not the answer.', (answer) => `${answer} is the group size or divisor from the question, not the result after sharing.`],
  ['You lost the decimal point.', (answer) => `${answer} has the right-looking digits, but the decimal point is in the wrong place or missing.`],
  ['ran names an action, so it is a verb rather than the kind of word the prompt is asking for.', (answer) => `${answer} is something someone does, so it points to a verb instead of the requested word type.`],
  ['Slept is an action word, which is a verb.', (answer) => `${answer} describes an action or state, so it is a verb rather than a noun.`],
  ['A triangle has only 3 sides.', (answer) => `${answer} has three sides; the target shape needs the side count described in the clue.`],
  ['A circle has no straight sides at all.', (answer) => `${answer} is round, so it cannot be the straight-sided shape in the prompt.`],
  ['A circle has no straight sides or corners.', (answer) => `${answer} is round with no corners; this clue needs a shape with straight sides.`],
  ['A circle has no straight sides.', (answer) => `${answer} is round, while the prompt is asking about a shape with sides.`],
  ['A pentagon has 5 sides, not 4.', (answer) => `${answer} has five sides; check the side count before choosing the shape.`],
  ['A rectangle has 4 corners but its sides are not all equal.', (answer) => `${answer} has four corners, but the equal-side clue points somewhere else.`],
  ['Two lines cannot close up to make a shape.', (answer) => `${answer} is not enough sides to enclose the shape being described.`],
  ['Old means almost the same as ancient, not the opposite.', (answer) => `${answer} is close in meaning to ancient; the prompt wants a word pointing the other way.`],
  ['Open is not the opposite of begin.', (answer) => `${answer} does not undo begin; look for the word that means the action has finished.`],
  ['Angry is a different feeling, not the same as happy.', (answer) => `${answer} names a different mood; a synonym should stay close to happy.`],
  ['Every whole number is either even or odd.', (answer) => `${answer} is still part of the even-or-odd number family; check the ones digit instead.`],
  ['The two numbers are not the same.', (answer) => `${answer} would mean both sides match, but these two numbers differ when you compare the digits.`],
  ['These are three different numbers.', (answer) => `${answer} misses that the three values are not equal; compare their positions or place values.`],
  ['More digits does not mean a bigger number.', (answer) => `${answer} looks longer, but decimals depend on place value, not digit count alone.`],
  ['You wrote the digits side by side instead of adding.', (answer) => `${answer} sticks the digits together; addition means combine their values.`],
  ['You wrote the digits side by side.', (answer) => `${answer} joins the digits as text instead of doing the arithmetic operation.`],
  ['You added a zero by mistake.', (answer) => `${answer} is inflated by an extra zero; recheck the place value of the final answer.`],
  ['This adds 5 and 4 instead of multiplying.', (answer) => `${answer} is the sum of 5 and 4, but equal groups call for multiplication.`],
  ['You added 23 and 4 instead of multiplying.', (answer) => `${answer} is 23 plus 4, but the prompt asks for four groups of 23.`],
  ['You added the numbers instead of multiplying.', (answer) => `${answer} combines the numbers as a sum, but the question asks for equal groups.`],
  ['This adds 10 instead of multiplying by 10.', (answer) => `${answer} adds one ten, but multiplying by 10 scales the entire number.`],
  ['This subtracts 5 from 20 instead of dividing.', (answer) => `${answer} takes away 5 once, but division asks how many equal groups fit in 20.`],
  ['This subtracts 4 from 24 instead of dividing.', (answer) => `${answer} subtracts one group of 4, but the prompt asks how many are in each equal group.`],
  ['This subtracts 4 from 28 instead of dividing.', (answer) => `${answer} takes 4 away from 28, but the clue asks for 28 split into 4 equal parts.`],
  ['This subtracts 3 instead of dividing.', (answer) => `${answer} takes away one 3, but this division question asks for equal sharing.`],
  ['You subtracted 3 instead of dividing.', (answer) => `${answer} is a take-away result, but the story asks for sharing into 3 equal parts.`],
  ['You subtracted 4 instead of dividing.', (answer) => `${answer} is a subtraction result, but this prompt asks for a division share.`],
  ['This multiplies 20 by 5 instead of dividing.', (answer) => `${answer} grows 20 by groups of 5, but the prompt asks how many 5s fit into 20.`],
  ['This adds instead of dividing.', (answer) => `${answer} comes from joining the numbers, but division asks for sharing or grouping.`],
  ['This is the number you divide by, not the answer.', (answer) => `${answer} is the divisor from the problem, not the result after the sharing is done.`],
  ['A remainder cannot be bigger than the number you divide by.', (answer) => `${answer} leaves too much behind; a valid remainder must be smaller than the divisor.`],
  ['2/3 is more than half because two of three equal parts covers most of the whole.', (answer) => `${answer} covers more than half of the whole, so it is too large for a one-half answer.`],
  ['3/4 is three out of four equal pieces, which is more than half the shape.', (answer) => `${answer} covers three quarters of the shape, more than the half being asked for.`],
  ['1/4 is one out of four equal pieces, which is smaller than one out of two.', (answer) => `${answer} is only one quarter, so it is smaller than a half.`],
  ['3/10 adds the denominators, but like fractions keep the same bottom number and only combine the tops.', (answer) => `${answer} changes the denominator; when the bottoms already match, keep that bottom and add only the tops.`],
  ['You multiplied the bottoms but added the tops.', (answer) => `${answer} changes the denominator as if this were multiplication, but like-fraction addition keeps the same denominator.`],
  ['The ones digit is 7, which rounds up, not down.', (answer) => `${answer} rounds the wrong way; a ones digit of 7 pushes the number up to the next ten.`],
  ['You moved the point too far.', (answer) => `${answer} shifts the decimal too many places; move it only as far as the operation requires.`],
  ['Area is measured in square units, not just cm.', (answer) => `${answer} uses length units, but area needs square units because it covers a surface.`],
  ['This finds the perimeter, not the area.', (answer) => `${answer} traces around the outside; area measures the space inside.`],
  ['This adds the sides instead of multiplying.', (answer) => `${answer} adds lengths around or across the shape, but area needs length times width.`],
  ['This multiplies the sides instead of adding them.', (answer) => `${answer} treats the question like area, but this one asks for the distance around the shape.`],
  ['You added only one length and one width.', (answer) => `${answer} counts only half the boundary; perimeter needs all matching sides.`],
  ['A clock measures time, not length.', (answer) => `${answer} is for time, but length is measured with tools like a ruler or tape measure.`],
  ['The hour hand has not reached 5 yet.', (answer) => `${answer} reads the hour too early; follow where the hour hand has actually moved.`],
  ['An hour is not split into 100 minutes.', (answer) => `${answer} treats time like a base-100 measure, but an hour has 60 minutes.`],
  ['24 is the number of hours in a day, not minutes in an hour.', (answer) => `${answer} belongs to hours in a day; minutes in an hour use 60.`],
  ['12 is the number of months in a year, not days in a week.', (answer) => `${answer} is a months-in-a-year fact, not the seven-day week.`],
  ['Twelve is the number of months in a year, not days in a week.', (answer) => `${answer} belongs to months in a year, but the week has seven days.`],
  ['Kilograms measure how heavy something is.', (answer) => `${answer} measures mass or weight, not the quantity named in this prompt.`],
  ['Liters measure liquid, not length.', (answer) => `${answer} is for liquid volume, not measuring how long something is.`],
  ['Kilometers measure long distances like between towns.', (answer) => `${answer} fits long travel distances, not the smaller measure asked for here.`],
  ['A kitten is a baby cat, not a baby dog.', (answer) => `${answer} belongs to cats; the baby dog word is puppy.`],
  ['That is one short of the total.', (answer) => `${answer} stops one count early; include the final item in the total.`],
  ['That is one beat too many.', (answer) => `${answer} adds an extra beat; count the rhythm or pattern once more slowly.`],
  ['This is a plain fact with no comparison.', (answer) => `${answer} states a fact, but the prompt is asking for a comparison.`],
])

function quoteFor(value) {
  if (!value.includes("'")) return `'${value}'`
  return JSON.stringify(value)
}

function polishFile(filePath) {
  let text = fs.readFileSync(filePath, 'utf8')
  let changed = false
  const next = text.replace(/miss\((['"])((?:\\.|(?!\1).)*?)\1,\s*(['"])((?:\\.|(?!\3).)*?)\3,\s*(['"])((?:\\.|(?!\5).)*?)\5\)/g, (match, aq, answerRaw, wq, whyRaw, hq, hintRaw) => {
    const answer = answerRaw.replace(/\\'/g, "'").replace(/\\"/g, '"')
    const why = whyRaw.replace(/\\'/g, "'").replace(/\\"/g, '"')
    const hint = hintRaw.replace(/\\'/g, "'").replace(/\\"/g, '"')
    const replacement = replacements.get(why)
    if (!replacement) return match
    changed = true
    return `miss(${quoteFor(answer)}, ${quoteFor(replacement(answer))}, ${quoteFor(hint)})`
  })
  if (changed) fs.writeFileSync(filePath, next, 'utf8')
  return changed
}

const files = fs.readdirSync(catalogDir)
  .filter((name) => /Prim103TopUp.*\.ts$/.test(name))
  .map((name) => path.join(catalogDir, name))

let changedFiles = 0
for (const file of files) {
  if (polishFile(file)) changedFiles += 1
}

console.log(`Polished repeated primary feedback in ${changedFiles} files.`)
