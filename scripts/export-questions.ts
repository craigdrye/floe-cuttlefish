import { buildQuantQuestionCatalog } from '../src/data/questionCatalog/quant'
import { writeFileSync } from 'fs'

const catalog = buildQuantQuestionCatalog()
const questions = catalog['quant']

// Group by chapter preserving insertion order
const byChapter: Record<string, typeof questions> = {}
for (const q of questions) {
  if (!byChapter[q.chapter]) byChapter[q.chapter] = []
  byChapter[q.chapter].push(q)
}

const lines: string[] = []

for (const [chapter, qs] of Object.entries(byChapter)) {
  lines.push('='.repeat(70))
  lines.push(`CHAPTER: ${chapter}  (${qs.length} questions)`)
  lines.push('='.repeat(70))
  lines.push('')

  for (const q of qs) {
    const correctAnswer = q.answers.find(a => a.correct)
    const wrongAnswers = q.answers.filter(a => !a.correct)

    lines.push(`ID: ${q.id}  |  ${q.title}`)
    lines.push(`Q: ${q.prompt}`)
    lines.push('')
    lines.push(`  CORRECT: ${correctAnswer?.label}`)
    for (const w of wrongAnswers) {
      const m = w.misconceptions?.[0]
      lines.push(`  WRONG:   ${w.label}`)
      if (m) {
        lines.push(`           Flaw: ${m.flaw}`)
        lines.push(`           Reframe: ${m.reframe}`)
      }
    }
    lines.push('')
    if (q.lesson) {
      lines.push('LESSON:')
      lines.push(q.lesson)
    }
    lines.push('')
    lines.push('-'.repeat(70))
    lines.push('')
  }
}

const output = lines.join('\n')
writeFileSync('quant_questions.txt', output, 'utf8')
console.log(`Written ${questions.length} questions across ${Object.keys(byChapter).length} chapters.`)
