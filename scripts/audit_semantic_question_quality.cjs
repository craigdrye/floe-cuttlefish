const fs = require('node:fs')
const path = require('node:path')
const ts = require('typescript')

const repoRoot = path.resolve(__dirname, '..')
const catalogDir = path.join(repoRoot, 'src/data/questionCatalog')
const outputDir = path.join(repoRoot, 'reports')
const jsonOutputPath = path.join(outputDir, 'semantic-question-quality-audit.json')
const markdownOutputPath = path.join(outputDir, 'semantic-question-quality-audit.md')

const DUPLICATE_WHY_WRONG_MIN_COUNT = 3
const MAX_JSON_ISSUES = 5000
const MAX_EXAMPLES_PER_FLAG = 120
const MAX_MARKDOWN_EXAMPLES = 250
const MAX_DUPLICATE_GROUPS = 40

const FLAG_META = {
  'source-jargon-leak': {
    priority: 95,
    label: 'Source jargon leak',
    explanation: 'Learner-facing text mentions importer/source vocabulary such as IMS exercise or raw source prompt.',
  },
  'lazy-why-wrong': {
    priority: 90,
    label: 'Lazy whyWrong',
    explanation: 'A distractor flaw is too terse to teach, e.g. No. or Not X.',
  },
  'repeated-why-wrong': {
    priority: 84,
    label: 'Repeated whyWrong',
    explanation: 'The same distractor flaw appears repeatedly, suggesting boilerplate rather than a specific misconception.',
  },
  'obvious-irrelevant-distractor': {
    priority: 78,
    label: 'Obvious irrelevant distractor',
    explanation: 'A wrong answer appears comically or generically unrelated to the prompt context.',
  },
  'formulaic-wrapper': {
    priority: 72,
    label: 'Formulaic wrapper',
    explanation: 'The prompt uses a synthetic wrapper instead of asking the learning task directly.',
  },
  'meta-distractor': {
    priority: 66,
    label: 'Meta distractor',
    explanation: 'A wrong answer teaches test-taking behavior or vague strategy instead of a plausible content misconception.',
  },
}

const FORMULAIC_PROMPT_PATTERNS = [
  {
    pattern: /^\s*This\s+.+?\s+question\s+is\s+about\s+.+?\./i,
    detail: 'Starts with "This X question is about Y."',
  },
  {
    pattern: /^\s*A learner runs into the (?:idea|term)\b/i,
    detail: 'Starts with "A learner runs into the idea/term".',
  },
  {
    pattern: /\bWhich answer best completes this claim:/i,
    detail: 'Uses a generic "best completes this claim" wrapper.',
  },
  {
    pattern: /\bWhich answer best completes this concept\??\s*$/i,
    detail: 'Ends with "Which answer best completes this concept?"',
  },
  {
    pattern: /\bWhich answer is correct\??\s*$/i,
    detail: 'Ends with the generic wrapper "Which answer is correct?"',
  },
  {
    pattern: /\bWhich answer correctly completes this ["'][^"']+["'] problem\??\s*$/i,
    detail: 'Uses a generated "correctly completes this problem" wrapper.',
  },
]

const SOURCE_JARGON_PATTERNS = [
  {
    pattern: /\b(?:IMS|OpenIntro IMS|Numbas|WeBWorK|CK-12|OpenDSA|Kolibri)\b[\w\s-]{0,56}\b(?:exercise|problem|question|item)\b/i,
    detail: 'Mentions source/importer exercise vocabulary.',
  },
  {
    pattern: /\b(?:the|this)\s+(?:IMS|Numbas|WeBWorK|CK-12|OpenDSA|Kolibri)\b/i,
    detail: 'Names the source system as part of the learner-facing setup.',
  },
  {
    pattern: /\b(?:raw\s+(?:prompt|exercise|question|solution)|source\s+(?:prompt|exercise|question|item|solution))\b/i,
    detail: 'Mentions raw/source authoring vocabulary.',
  },
  {
    pattern: /^Source:\s+.+?\b(?:exercise|problem|question|item)\b/i,
    detail: 'Starts a learner-facing explanation with source exercise provenance.',
  },
  {
    pattern: /\bIntroduction to Modern Statistics exercise\b/i,
    detail: 'Mentions the source textbook exercise instead of the learning setup.',
  },
  {
    pattern: /\bopenintro-ims::[a-z0-9:_-]+\b/i,
    detail: 'Leaks an OpenIntro IMS source id.',
  },
]

const META_DISTRACTOR_PATTERNS = [
  /^answer with\b/i,
  /^answer only\b/i,
  /^answer the first\b/i,
  /^always answer\b/i,
  /^average all answer choices\b/i,
  /^use the adjacent concept\b/i,
  /^select (?:the answer|it)\b/i,
  /^start with the longest\b/i,
  /^write one\b/i,
  /^pick the\b/i,
  /^choose the\b/i,
  /^grab the\b/i,
  /^assume\b/i,
  /^ignore\b/i,
  /^rely on a remembered rule\b/i,
  /^treat\b.*\bautomatic\b/i,
  /^stop at\b/i,
  /^skip\b/i,
  /without checking/i,
  /sounds nicest/i,
  /sounds most senior/i,
  /broad intuition/i,
  /nearest familiar/i,
  /\bvibe\b/i,
]

const OBVIOUSLY_IRRELEVANT_PATTERNS = [
  /\boffice snacks?\b/i,
  /\bsparkly\b/i,
  /\bconfetti\b/i,
  /\bbreakfast\b/i,
  /\bwaffle\b/i,
  /\bburrito\b/i,
  /\bfunniest\b/i,
  /\blogo\b/i,
  /\bbutton color\b/i,
  /\bheroic name\b/i,
  /\bpremium vibes?\b/i,
  /\bdashboard looks\b/i,
  /\bscreenshot/i,
  /\bblog posts?\b/i,
  /\bprinter\b/i,
  /\bvideo editor\b/i,
  /\bsocial network\b/i,
  /\bjob board\b/i,
  /\billegal\b/i,
  /\bdelete before anyone reviews\b/i,
  /\bforever for every\b/i,
  /\bnever useful\b/i,
  /\bperfectly enforceable\b/i,
  /\bextremely premium\b/i,
  /\bsounds (?:exciting|fancy|senior|scientific|technical)\b/i,
]

const LAZY_WHY_WRONG_PATTERNS = [
  /^(?:no|nope|wrong|incorrect|false)\.?$/i,
  /^not\s+[\w\s'-]{1,32}\.?$/i,
  /^(?:same issue|different topic|unrelated|opposite)\.?$/i,
  /^(?:that|this|it)\s+(?:is|isn't|is not)\s+(?:wrong|incorrect|correct|the branch|the concept)\.?$/i,
]

const STOP_WORDS = new Set([
  'a',
  'about',
  'after',
  'all',
  'an',
  'and',
  'any',
  'are',
  'as',
  'at',
  'be',
  'because',
  'before',
  'best',
  'but',
  'by',
  'can',
  'does',
  'for',
  'from',
  'has',
  'have',
  'how',
  'if',
  'in',
  'is',
  'it',
  'its',
  'not',
  'of',
  'on',
  'or',
  'should',
  'so',
  'that',
  'the',
  'this',
  'to',
  'what',
  'when',
  'where',
  'which',
  'while',
  'who',
  'why',
  'will',
  'with',
])

const sourceLineCache = new Map()

function listTypeScriptFiles(dir) {
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.ts'))
    .map((file) => path.join(dir, file))
    .sort()
}

function relativePath(filePath) {
  return path.relative(repoRoot, filePath)
}

function unwrapExpression(node) {
  let current = node
  while (
    current &&
    (ts.isParenthesizedExpression(current) ||
      ts.isAsExpression(current) ||
      ts.isTypeAssertionExpression(current) ||
      ts.isSatisfiesExpression?.(current) ||
      ts.isNonNullExpression(current))
  ) {
    current = current.expression
  }
  return current
}

function nodeText(node, sourceFile) {
  if (!node) return ''
  return node.getText(sourceFile)
}

function stringValue(node, sourceFile) {
  const current = unwrapExpression(node)
  if (!current) return undefined
  if (ts.isStringLiteral(current) || ts.isNoSubstitutionTemplateLiteral(current)) return current.text
  if (ts.isTemplateExpression(current)) {
    const parts = [current.head.text]
    for (const span of current.templateSpans) {
      parts.push('${...}')
      parts.push(span.literal.text)
    }
    return parts.join('')
  }
  if (ts.isArrowFunction(current) && current.body) return stringValue(current.body, sourceFile)
  if (ts.isCallExpression(current) && getExpressionName(current.expression) === 'String' && current.arguments[0]) {
    return stringValue(current.arguments[0], sourceFile)
  }
  return undefined
}

function numberValue(node) {
  const current = unwrapExpression(node)
  if (!current) return undefined
  if (ts.isNumericLiteral(current)) return Number(current.text)
  if (
    ts.isPrefixUnaryExpression(current) &&
    current.operator === ts.SyntaxKind.MinusToken &&
    ts.isNumericLiteral(current.operand)
  ) {
    return -Number(current.operand.text)
  }
  return undefined
}

function booleanValue(node) {
  const current = unwrapExpression(node)
  if (!current) return undefined
  if (current.kind === ts.SyntaxKind.TrueKeyword) return true
  if (current.kind === ts.SyntaxKind.FalseKeyword) return false
  return undefined
}

function getExpressionName(node) {
  if (ts.isIdentifier(node)) return node.text
  if (ts.isPropertyAccessExpression(node)) return node.name.text
  return undefined
}

function propertyName(name) {
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) return String(name.text)
  return undefined
}

function getProperty(objectNode, propName) {
  if (!ts.isObjectLiteralExpression(objectNode)) return undefined
  return objectNode.properties.find((property) => {
    if (!ts.isPropertyAssignment(property) && !ts.isShorthandPropertyAssignment(property)) return false
    return propertyName(property.name) === propName
  })
}

function propertyInitializer(objectNode, propName) {
  const property = getProperty(objectNode, propName)
  if (!property) return undefined
  if (ts.isShorthandPropertyAssignment(property)) return property.name
  return property.initializer
}

function lineInfo(sourceFile, sourceText, node) {
  if (!node) return undefined
  const start = node.getStart(sourceFile)
  const location = sourceFile.getLineAndCharacterOfPosition(start)
  const line = location.line + 1
  let sourceLines = sourceLineCache.get(sourceFile.fileName)
  if (!sourceLines) {
    sourceLines = sourceText.split(/\r?\n/)
    sourceLineCache.set(sourceFile.fileName, sourceLines)
  }
  const snippet = sourceLines[location.line]?.trim().replace(/\s+/g, ' ') ?? ''
  return {
    line,
    snippet: snippet.length > 260 ? `${snippet.slice(0, 257)}...` : snippet,
  }
}

function cleanForDisplay(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
}

function normalizeText(value) {
  return cleanForDisplay(value)
    .toLowerCase()
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[\u2013\u2014]/g, '-')
}

function normalizeWhyWrong(value) {
  return normalizeText(value)
    .replace(/["'`]+/g, '')
    .replace(/[^a-z0-9$#]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function wordCount(value) {
  return (cleanForDisplay(value).match(/[A-Za-z][A-Za-z'-]*/g) ?? []).length
}

function tokens(value) {
  return new Set(
    normalizeText(value)
      .replace(/[^a-z0-9]+/g, ' ')
      .split(/\s+/)
      .filter((token) => token.length > 2 && !STOP_WORDS.has(token)),
  )
}

function overlapRatio(answerText, contextText) {
  const answerTokens = tokens(answerText)
  if (answerTokens.size === 0) return 0
  const contextTokens = tokens(contextText)
  let overlap = 0
  for (const token of answerTokens) {
    if (contextTokens.has(token)) overlap += 1
  }
  return overlap / answerTokens.size
}

function extractWrongArrayItems(arrayNode, sourceFile, sourceText) {
  const current = unwrapExpression(arrayNode)
  if (!current || !ts.isArrayLiteralExpression(current)) return []

  const wrongAnswers = []
  current.elements.forEach((element, index) => {
    const item = unwrapExpression(element)
    const loc = lineInfo(sourceFile, sourceText, item)

    if (ts.isArrayLiteralExpression(item)) {
      const labelNode = item.elements[0]
      const flawNode = item.elements[1]
      const reframeNode = item.elements[2]
      wrongAnswers.push({
        index,
        label: stringValue(labelNode, sourceFile),
        flaw: stringValue(flawNode, sourceFile),
        reframe: stringValue(reframeNode, sourceFile),
        line: loc?.line,
        snippet: loc?.snippet,
      })
      return
    }

    if (ts.isCallExpression(item)) {
      const callName = getExpressionName(item.expression)
      let labelNode = item.arguments[0]
      let flawNode = item.arguments[1]
      let reframeNode = item.arguments[2]
      let flaw = stringValue(flawNode, sourceFile)
      let reframe = stringValue(reframeNode, sourceFile)

      if (callName === 'distractor' && item.arguments.length === 2) {
        const scope = stringValue(item.arguments[0], sourceFile)
        const answer = stringValue(item.arguments[1], sourceFile)
        labelNode = item.arguments[1]
        if (scope && answer) {
          const shortAnswer = answer.length > 64 ? `${answer.slice(0, 61)}...` : answer
          const scopeNudges = {
            geography: 'place, latitude, landform, water body, or Earth-system clue',
            history: 'period, person, event, institution, or cause-and-effect clue',
            literature: 'author, title, character, genre, or quoted-work clue',
            'language or culture': 'language-family, translation, country, or culture clue',
            'environmental science': 'scale, chemistry, climate, or environmental-process clue',
          }
          const nudge = scopeNudges[scope] ?? `${scope} clue`
          flaw = `${shortAnswer} is a nearby ${scope} answer, but it does not fit the specific ${nudge} in the prompt.`
          reframe = `Anchor the answer to the named ${scope} relationship rather than to a familiar-but-wrong term.`
        }
      }

      wrongAnswers.push({
        index,
        label: stringValue(labelNode, sourceFile),
        flaw,
        reframe,
        line: loc?.line,
        snippet: loc?.snippet,
      })
      return
    }

    if (ts.isObjectLiteralExpression(item)) {
      const labelNode = propertyInitializer(item, 'label')
      const flawNode = propertyInitializer(item, 'flaw')
      const reframeNode = propertyInitializer(item, 'reframe')
      wrongAnswers.push({
        index,
        label: stringValue(labelNode, sourceFile),
        flaw: stringValue(flawNode, sourceFile),
        reframe: stringValue(reframeNode, sourceFile),
        line: loc?.line,
        snippet: loc?.snippet,
      })
    }
  })

  return wrongAnswers.filter((answer) => answer.label || answer.flaw || answer.reframe)
}

function extractAnswerObjects(answersNode, sourceFile, sourceText) {
  const current = unwrapExpression(answersNode)
  if (!current || !ts.isArrayLiteralExpression(current)) return []

  const wrongAnswers = []
  current.elements.forEach((element, index) => {
    const item = unwrapExpression(element)
    if (!ts.isObjectLiteralExpression(item)) return
    const correct = booleanValue(propertyInitializer(item, 'correct'))
    if (correct === true) return

    const label = stringValue(propertyInitializer(item, 'label'), sourceFile)
    const misconceptions = unwrapExpression(propertyInitializer(item, 'misconceptions'))
    const loc = lineInfo(sourceFile, sourceText, item)

    if (misconceptions && ts.isArrayLiteralExpression(misconceptions)) {
      const firstMisconception = unwrapExpression(misconceptions.elements[0])
      if (firstMisconception && ts.isObjectLiteralExpression(firstMisconception)) {
        wrongAnswers.push({
          index,
          label,
          flaw: stringValue(propertyInitializer(firstMisconception, 'flaw'), sourceFile),
          reframe: stringValue(propertyInitializer(firstMisconception, 'reframe'), sourceFile),
          line: loc?.line,
          snippet: loc?.snippet,
        })
        return
      }
    }

    wrongAnswers.push({
      index,
      label,
      flaw: undefined,
      reframe: undefined,
      line: loc?.line,
      snippet: loc?.snippet,
    })
  })

  return wrongAnswers.filter((answer) => answer.label || answer.flaw || answer.reframe)
}

function buildQuestionRecord(partial) {
  if (!partial.prompt) return undefined
  return {
    id: partial.id,
    title: partial.title,
    chapter: partial.chapter,
    source: partial.source,
    prompt: partial.prompt,
    correct: partial.correct,
    lesson: partial.lesson,
    solution: partial.solution,
    mentorHint: partial.mentorHint,
    wrongAnswers: partial.wrongAnswers ?? [],
    file: partial.file,
    line: partial.line,
    snippet: partial.snippet,
    extractor: partial.extractor,
  }
}

function isOpenStaxPlaceholderQuestion(question) {
  if (question.file !== 'src/data/questionCatalog/openstax.ts') return false

  const correct = normalizeText(question.correct)
  const lesson = normalizeText(question.lesson)
  const hasOpenEndedPlaceholder = question.wrongAnswers.some(
    (answer) => normalizeText(answer.label) === 'n a open ended',
  )

  return (
    correct === 'see solution' ||
    correct === 'no solution provided' ||
    lesson === 'no solution provided' ||
    hasOpenEndedPlaceholder
  )
}

function isNonPlayableImportPlaceholder(question) {
  return isOpenStaxPlaceholderQuestion(question)
}

function extractQuestionObject(node, sourceFile, sourceText, filePath) {
  const promptNode = propertyInitializer(node, 'prompt')
  const prompt = stringValue(promptNode, sourceFile)
  if (!prompt) return undefined

  const wrongNode = propertyInitializer(node, 'wrong')
  const answersNode = propertyInitializer(node, 'answers')
  const loc = lineInfo(sourceFile, sourceText, promptNode ?? node)
  const wrongAnswers = [
    ...extractWrongArrayItems(wrongNode, sourceFile, sourceText),
    ...extractAnswerObjects(answersNode, sourceFile, sourceText),
  ]

  return buildQuestionRecord({
    id: numberValue(propertyInitializer(node, 'id')),
    title: stringValue(propertyInitializer(node, 'title'), sourceFile),
    chapter: stringValue(propertyInitializer(node, 'chapter'), sourceFile),
    source: stringValue(propertyInitializer(node, 'source'), sourceFile),
    prompt,
    correct: stringValue(propertyInitializer(node, 'correct'), sourceFile),
    lesson: stringValue(propertyInitializer(node, 'lesson'), sourceFile),
    solution: stringValue(propertyInitializer(node, 'solution'), sourceFile),
    mentorHint: stringValue(propertyInitializer(node, 'mentorHint'), sourceFile),
    wrongAnswers,
    file: relativePath(filePath),
    line: loc?.line,
    snippet: loc?.snippet,
    extractor: 'object',
  })
}

function extractQuestionCall(node, sourceFile, sourceText, filePath) {
  const callName = getExpressionName(node.expression)
  const knownCalls = new Set(['q', 'makeSimpleQuestion'])
  if (!knownCalls.has(callName)) return undefined

  const prompt = stringValue(node.arguments[4], sourceFile)
  if (!prompt) return undefined

  const loc = lineInfo(sourceFile, sourceText, node.arguments[4] ?? node)
  return buildQuestionRecord({
    id: numberValue(node.arguments[0]),
    title: stringValue(node.arguments[3], sourceFile),
    chapter: stringValue(node.arguments[2], sourceFile),
    prompt,
    correct: stringValue(node.arguments[5], sourceFile),
    lesson: stringValue(node.arguments[7], sourceFile),
    wrongAnswers: extractWrongArrayItems(node.arguments[6], sourceFile, sourceText),
    file: relativePath(filePath),
    line: loc?.line,
    snippet: loc?.snippet,
    extractor: callName,
  })
}

function scanFile(filePath) {
  const sourceText = fs.readFileSync(filePath, 'utf8')
  const sourceFile = ts.createSourceFile(filePath, sourceText, ts.ScriptTarget.Latest, true)
  const questions = []
  const rawIssues = []

  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const question = extractQuestionObject(node, sourceFile, sourceText, filePath)
      if (question) questions.push(question)
    }

    if (ts.isCallExpression(node)) {
      const question = extractQuestionCall(node, sourceFile, sourceText, filePath)
      if (question) questions.push(question)
    }

    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node) || ts.isTemplateExpression(node)) {
      const value = stringValue(node, sourceFile)
      if (value) rawIssues.push(...checkRawSourceString(filePath, sourceFile, sourceText, node, value))
    }

    ts.forEachChild(node, visit)
  }

  visit(sourceFile)
  return { questions, rawIssues }
}

function issueBase(question, flag, field, value, detail, override = {}) {
  const meta = FLAG_META[flag]
  return {
    flag,
    label: meta.label,
    priority: override.priority ?? meta.priority,
    file: question.file,
    line: override.line ?? question.line,
    questionId: question.id,
    title: question.title,
    chapter: question.chapter,
    field,
    value: cleanForDisplay(value),
    detail,
    snippet: override.snippet ?? question.snippet,
    extractor: question.extractor,
  }
}

function checkFormulaicPrompt(question) {
  for (const entry of FORMULAIC_PROMPT_PATTERNS) {
    if (entry.pattern.test(question.prompt)) {
      return [
        issueBase(question, 'formulaic-wrapper', 'prompt', question.prompt, entry.detail),
      ]
    }
  }
  return []
}

function checkRawSourceString(filePath, sourceFile, sourceText, node, value) {
  const matches = []

  for (const entry of FORMULAIC_PROMPT_PATTERNS) {
    if (entry.pattern.test(value)) {
      matches.push(['formulaic-wrapper', entry.detail])
      break
    }
  }

  if (matches.length === 0) return []

  const loc = lineInfo(sourceFile, sourceText, node)
  const pseudoQuestion = {
    file: relativePath(filePath),
    line: loc?.line,
    snippet: loc?.snippet,
    extractor: 'source-string',
  }

  return matches.map(([flag, detail]) => issueBase(pseudoQuestion, flag, 'source-string', value, detail))
}

function checkSourceJargon(question) {
  const fields = [
    ['prompt', question.prompt],
    ['lesson', question.lesson],
    ['solution', question.solution],
    ['mentorHint', question.mentorHint],
  ]
  const issues = []

  for (const [field, value] of fields) {
    if (!value) continue
    const matched = SOURCE_JARGON_PATTERNS.find((entry) => entry.pattern.test(value))
    if (matched) {
      issues.push(issueBase(question, 'source-jargon-leak', field, value, matched.detail))
      break
    }
  }

  return issues
}

function checkWrongAnswerQuality(question) {
  const issues = []
  const context = `${question.chapter ?? ''} ${question.title ?? ''} ${question.prompt ?? ''} ${question.correct ?? ''}`

  for (const answer of question.wrongAnswers) {
    const flaw = cleanForDisplay(answer.flaw)
    const label = cleanForDisplay(answer.label)
    const answerLine = answer.line ?? question.line
    const answerSnippet = answer.snippet ?? question.snippet

    if (flaw) {
      const lazyPattern = LAZY_WHY_WRONG_PATTERNS.find((pattern) => pattern.test(flaw))
      if (lazyPattern || (wordCount(flaw) <= 2 && !/[0-9]/.test(flaw))) {
        issues.push(
          issueBase(question, 'lazy-why-wrong', 'whyWrong', flaw, 'Distractor flaw is too terse to explain the misconception.', {
            line: answerLine,
            snippet: answerSnippet,
          }),
        )
      }
    }

    if (label && META_DISTRACTOR_PATTERNS.some((pattern) => pattern.test(label))) {
      issues.push(
        issueBase(question, 'meta-distractor', 'distractor', label, 'Wrong answer is about answering strategy rather than content.', {
          line: answerLine,
          snippet: answerSnippet,
        }),
      )
    }

    if (label) {
      const explicitIrrelevant = OBVIOUSLY_IRRELEVANT_PATTERNS.some((pattern) => pattern.test(label))
      const overlap = overlapRatio(label, context)
      const isLongEnoughToJudge = tokens(label).size >= 3
      if (explicitIrrelevant && (!isLongEnoughToJudge || overlap <= 0.22)) {
        issues.push(
          issueBase(
            question,
            'obvious-irrelevant-distractor',
            'distractor',
            label,
            `Distractor looks unrelated to the prompt context (token overlap ${Math.round(overlap * 100)}%).`,
            {
              line: answerLine,
              snippet: answerSnippet,
            },
          ),
        )
      }
    }
  }

  return issues
}

function duplicateWhyWrongIssues(questions) {
  const groups = new Map()

  for (const question of questions) {
    for (const answer of question.wrongAnswers) {
      const flaw = cleanForDisplay(answer.flaw)
      if (!flaw || wordCount(flaw) < 5) continue
      const key = normalizeWhyWrong(flaw)
      if (!key || key.length < 24) continue
      const group = groups.get(key) ?? {
        key,
        text: flaw,
        count: 0,
        locations: [],
      }
      group.count += 1
      group.locations.push({ question, answer })
      groups.set(key, group)
    }
  }

  const duplicateGroups = [...groups.values()]
    .filter((group) => group.count >= DUPLICATE_WHY_WRONG_MIN_COUNT)
    .sort((left, right) => {
      if (right.count !== left.count) return right.count - left.count
      return left.text.localeCompare(right.text)
    })

  const issues = []
  for (const group of duplicateGroups) {
    for (const { question, answer } of group.locations) {
      issues.push(
        issueBase(
          question,
          'repeated-why-wrong',
          'whyWrong',
          answer.flaw,
          `Same normalized whyWrong appears ${group.count} times.`,
          {
            priority: FLAG_META['repeated-why-wrong'].priority + Math.min(12, group.count),
            line: answer.line ?? question.line,
            snippet: answer.snippet ?? question.snippet,
          },
        ),
      )
    }
  }

  return {
    issues,
    groups: duplicateGroups.map((group) => ({
      text: group.text,
      count: group.count,
      examples: group.locations.slice(0, 8).map(({ question, answer }) => ({
        file: question.file,
        line: answer.line ?? question.line,
        questionId: question.id,
        title: question.title,
        chapter: question.chapter,
        snippet: answer.snippet ?? question.snippet,
      })),
    })),
  }
}

function sortedCountEntries(counts) {
  return Object.entries(counts).sort((left, right) => {
    if (right[1] !== left[1]) return right[1] - left[1]
    return left[0].localeCompare(right[0])
  })
}

function countBy(values) {
  const counts = {}
  for (const value of values) counts[value] = (counts[value] ?? 0) + 1
  return counts
}

function groupExamplesByFlag(issues) {
  const grouped = {}
  for (const issue of issues) {
    const list = grouped[issue.flag] ?? []
    if (list.length < MAX_EXAMPLES_PER_FLAG) list.push(issue)
    grouped[issue.flag] = list
  }
  return grouped
}

function sortIssues(issues) {
  return [...issues].sort((left, right) => {
    if (right.priority !== left.priority) return right.priority - left.priority
    if (left.file !== right.file) return left.file.localeCompare(right.file)
    if ((left.line ?? 0) !== (right.line ?? 0)) return (left.line ?? 0) - (right.line ?? 0)
    return String(left.questionId ?? '').localeCompare(String(right.questionId ?? ''))
  })
}

function dedupeIssues(issues) {
  const seen = new Set()
  const deduped = []
  for (const issue of issues) {
    const key = [
      issue.flag,
      issue.file,
      issue.line ?? '',
      normalizeText(issue.value).slice(0, 220),
    ].join('|')
    if (seen.has(key)) continue
    seen.add(key)
    deduped.push(issue)
  }
  return deduped
}

function escapeTable(value) {
  return cleanForDisplay(value).replace(/\|/g, '\\|')
}

function formatMaybe(value) {
  if (value === undefined || value === null || value === '') return 'unknown'
  return String(value)
}

function buildMarkdown(report) {
  const lines = [
    '# Semantic Question Quality Audit',
    '',
    `Generated on ${report.generatedAt}.`,
    '',
    'Scans `src/data/questionCatalog/*.ts` directly with the TypeScript parser, so it does not depend on app course wiring or runtime imports.',
    '',
    '## Summary',
    '',
    `- Files scanned: ${report.summary.filesScanned}`,
    `- Question-like records scanned: ${report.summary.questionsScanned}`,
    `- Extracted question records before quarantine: ${report.summary.extractedQuestionRecords}`,
    `- Non-playable import placeholders skipped: ${report.summary.skippedNonPlayablePlaceholders}`,
    `- Distinct question ids seen: ${report.summary.distinctQuestionIds}`,
    `- Total semantic issues found: ${report.summary.totalIssues}`,
    `- JSON issue rows stored: ${report.summary.jsonIssuesStored}`,
    '',
    '## Flag Counts',
    '',
    '| Flag | Count | Meaning |',
    '|---|---:|---|',
  ]

  for (const [flag, count] of sortedCountEntries(report.flagCounts)) {
    lines.push(`| \`${flag}\` | ${count} | ${escapeTable(FLAG_META[flag]?.explanation ?? '')} |`)
  }

  lines.push('')
  lines.push('## Highest-Signal Examples')
  lines.push('')
  lines.push('| Rank | Priority | Flag | File | Question | Field | Evidence | Detail |')
  lines.push('|---:|---:|---|---|---|---|---|---|')

  report.issues.slice(0, MAX_MARKDOWN_EXAMPLES).forEach((issue, index) => {
    const file = `${issue.file}:${formatMaybe(issue.line)}`
    const question = `\`${formatMaybe(issue.questionId)}\` ${escapeTable(issue.title ?? '')}`.trim()
    lines.push(
      `| ${index + 1} | ${issue.priority} | \`${issue.flag}\` | ${escapeTable(file)} | ${question} | ${escapeTable(issue.field)} | ${escapeTable(issue.value).slice(0, 220)} | ${escapeTable(issue.detail)} |`,
    )
  })

  if (report.duplicateWhyWrongGroups.length > 0) {
    lines.push('')
    lines.push('## Repeated whyWrong Groups')
    lines.push('')
    lines.push('| Rank | Count | whyWrong Text | Example Locations |')
    lines.push('|---:|---:|---|---|')

    report.duplicateWhyWrongGroups.slice(0, MAX_DUPLICATE_GROUPS).forEach((group, index) => {
      const locations = group.examples
        .slice(0, 4)
        .map((example) => `${example.file}:${formatMaybe(example.line)} (${formatMaybe(example.questionId)})`)
        .join('<br>')
      lines.push(`| ${index + 1} | ${group.count} | ${escapeTable(group.text).slice(0, 240)} | ${escapeTable(locations)} |`)
    })
  }

  lines.push('')
  lines.push('## Detection Notes')
  lines.push('')
  lines.push('- `formulaic-wrapper` catches prompt wrappers such as `This X question is about...`, `A learner runs into...`, and generic completion tails.')
  lines.push('- `source-jargon-leak` catches learner-facing source/import terms such as `IMS exercise`, `source prompt`, and raw source ids.')
  lines.push('- `obvious-irrelevant-distractor` is intentionally conservative: it requires an explicit off-topic marker and low overlap with the prompt context.')
  lines.push('- `repeated-why-wrong` is counted across normalized distractor flaw text with a minimum repeat threshold of three.')
  lines.push('- OpenStax rows that are already filtered from runtime play (`See Solution`, `No solution provided.`, or `N/A (Open-ended)`) are skipped as non-playable import placeholders.')

  return `${lines.join('\n')}\n`
}

function main() {
  const files = listTypeScriptFiles(catalogDir)
  const fileScans = files.map(scanFile)
  const extractedQuestions = fileScans.flatMap((scan) => scan.questions)
  const questions = extractedQuestions.filter((question) => !isNonPlayableImportPlaceholder(question))
  const skippedNonPlayablePlaceholders = extractedQuestions.length - questions.length
  const rawIssues = fileScans.flatMap((scan) => scan.rawIssues)
  const directIssues = questions.flatMap((question) => [
    ...checkSourceJargon(question),
    ...checkFormulaicPrompt(question),
    ...checkWrongAnswerQuality(question),
  ])
  const duplicateAudit = duplicateWhyWrongIssues(questions)
  const allIssues = sortIssues(dedupeIssues([...directIssues, ...rawIssues, ...duplicateAudit.issues]))
  const flagCounts = countBy(allIssues.map((issue) => issue.flag))
  const issuesForJson = allIssues.slice(0, MAX_JSON_ISSUES)

  const report = {
    generatedAt: new Date().toISOString(),
    summary: {
      filesScanned: files.length,
      questionsScanned: questions.length,
      extractedQuestionRecords: extractedQuestions.length,
      skippedNonPlayablePlaceholders,
      distinctQuestionIds: new Set(questions.map((question) => question.id).filter((id) => id !== undefined)).size,
      totalIssues: allIssues.length,
      jsonIssuesStored: issuesForJson.length,
      duplicateWhyWrongGroups: duplicateAudit.groups.length,
    },
    flagCounts,
    scannedFiles: files.map(relativePath),
    duplicateWhyWrongGroups: duplicateAudit.groups.slice(0, MAX_DUPLICATE_GROUPS),
    examplesByFlag: groupExamplesByFlag(allIssues),
    issues: issuesForJson,
  }

  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(jsonOutputPath, JSON.stringify(report, null, 2), 'utf8')
  fs.writeFileSync(markdownOutputPath, buildMarkdown(report), 'utf8')

  console.log(`Scanned ${report.summary.filesScanned} files and ${report.summary.questionsScanned} question-like records.`)
  console.log(`Found ${report.summary.totalIssues} semantic issue instances across ${Object.keys(flagCounts).length} flag types.`)
  for (const [flag, count] of sortedCountEntries(flagCounts)) {
    console.log(`- ${flag}: ${count}`)
  }
  console.log(`Wrote ${relativePath(jsonOutputPath)}`)
  console.log(`Wrote ${relativePath(markdownOutputPath)}`)
}

main()
