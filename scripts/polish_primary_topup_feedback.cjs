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
