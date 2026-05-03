const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const outJson = path.join(repoRoot, 'reports/remaining-oer-fixed-choice-candidates.json')
const outMd = path.join(repoRoot, 'reports/remaining-oer-fixed-choice-candidates.md')

const opendsaPath = path.join(repoRoot, 'data/raw_collections/opendsa/opendsa_exercises.json')
const triviaPath = path.join(repoRoot, 'data/raw_collections/opentriviaqa/opentriviaqa_questions.json')
const webworkPath = path.join(repoRoot, 'data/raw_collections/webwork_opl/webwork_opl_problems.json')
const webworkRepo = path.join(repoRoot, 'scratch/webwork_opl_repo')

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function normalizeText(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim()
}

function distinctWrongChoices(item, choiceKey, answerKey) {
  const correct = normalizeText(item[answerKey]).toLowerCase()
  const seen = new Set([correct])
  return (item[choiceKey] ?? [])
    .map(normalizeText)
    .filter(Boolean)
    .filter((choice) => {
      const key = choice.toLowerCase()
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function promptLeaksAnswer(item, promptKey, answerKey) {
  const prompt = normalizeText(item[promptKey])
  const answer = normalizeText(item[answerKey])
  return Boolean(answer && answer.length > 3 && new RegExp(escapeRegExp(answer), 'i').test(prompt))
}

const importedOpenDsaCollections = new Set([
  'open-dsa::abo',
  'open-dsa::alganal',
  'open-dsa::background',
  'open-dsa::binary',
  'open-dsa::cmp',
  'open-dsa::design',
  'open-dsa::fla',
  'open-dsa::graph',
  'open-dsa::hashing',
  'open-dsa::indexing',
  'open-dsa::introtosoftwaredesign',
  'open-dsa::list',
  'open-dsa::np',
  'open-dsa::pl',
  'open-dsa::recurtutor',
  'open-dsa::searching',
  'open-dsa::senioralganal',
  'open-dsa::sorting',
  'open-dsa::swdesignanddatastructs',
])

const openDsaTargets = {
  'open-dsa::mengbridgecourse': {
    track: 'universityPrep: Software Engineering Prep / Intro Computer Science',
    reason: 'bridge-course CS basics, debugging, and programming concepts not covered by the Algorithms/Software/Formal Languages imports',
  },
}

function hasOpenDsaTemplatePlaceholder(value) {
  return /\b(?:CHOICES|CHOICESINDEX|ANSWER|RELTYPE|INDEX|FRAGMENT|VAR\w*)\b/.test(value) || /\{[A-Za-z_][^}]*\}/.test(value)
}

function isRemainingOpenDsaCandidate(item) {
  const wrong = distinctWrongChoices(item, 'choices', 'solution_text')
  const values = [item.prompt_text, item.solution_text, ...wrong].map(normalizeText)
  return (
    !importedOpenDsaCollections.has(item.collection_id) &&
    openDsaTargets[item.collection_id] &&
    normalizeText(item.prompt_text).length >= 20 &&
    normalizeText(item.solution_text) &&
    wrong.length >= 2 &&
    !promptLeaksAnswer(item, 'prompt_text', 'solution_text') &&
    values.every((value) => !hasOpenDsaTemplatePlaceholder(value))
  )
}

const importedTriviaCategories = new Set(['brain-teasers'])
const triviaTargets = {
  'for-kids': {
    track: 'primary: Big Questions / Science Discovery / Reading and Vocab',
    reason: 'age-appropriate general knowledge with fixed answer choices',
  },
  'science-technology': {
    track: 'high/university: Science Discovery, AP Sciences, Intro CS where topic-matched',
    reason: 'course-adjacent science and technology facts with fixed answer choices',
  },
  geography: {
    track: 'high: World History / AP Human Geography',
    reason: 'map, country, region, and place knowledge aligned to geography tracks',
  },
  history: {
    track: 'high: US History / World History / AP History',
    reason: 'history facts aligned to existing history tracks',
  },
  literature: {
    track: 'high/university: English Literature / Humanities',
    reason: 'literature facts aligned to humanities and English tracks',
  },
  humanities: {
    track: 'high/university: Humanities / Philosophy / Art History',
    reason: 'humanities facts aligned to existing humanities tracks',
  },
  animals: {
    track: 'primary/high: Science Discovery / Biology',
    reason: 'biology and animal science facts with simple fixed choices',
  },
}

const staleTriviaPatterns = /\b(?:currently|today|this year|latest|newest|recent|president of|prime minister|ceo of|world record|ranked|which actor|which actress|movie|song|album|television|tv show|video game)\b/i
const unsafeTriviaPatterns = /\b(?:celebrity|celebrities|sports|music|movies|television|hobbies|religion|faith|rated|newest|entertainment|people|world)\b/i

function isRemainingTriviaCandidate(item) {
  const wrong = distinctWrongChoices(item, 'answer_choices', 'correct_answer')
  const prompt = normalizeText(item.prompt_text)
  return (
    !importedTriviaCategories.has(item.category) &&
    triviaTargets[item.category] &&
    !unsafeTriviaPatterns.test(item.category) &&
    prompt.length >= 12 &&
    normalizeText(item.correct_answer) &&
    wrong.length >= 2 &&
    !promptLeaksAnswer(item, 'prompt_text', 'correct_answer') &&
    !staleTriviaPatterns.test(prompt)
  )
}

function summarize(items, keyFn) {
  const out = {}
  for (const item of items) {
    const key = keyFn(item)
    out[key] = (out[key] ?? 0) + 1
  }
  return Object.entries(out)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([key, count]) => ({ key, count }))
}

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) walk(full, files)
    else if (entry.isFile() && entry.name.endsWith('.pg')) files.push(full)
  }
  return files
}

function classifyWebwork(rawItems) {
  const rawBySource = new Map(rawItems.map((item) => [item.source_file, item]))
  const pgFiles = walk(webworkRepo)
  const hits = []

  for (const file of pgFiles) {
    const text = fs.readFileSync(file, 'utf8')
    if (!/(RadioButtons|checkbox_cmp|parserRadioButtons|pop_up_list|parserPopUp|->menu\()/i.test(text)) continue
    const relative = path.relative(webworkRepo, file)
    const item = rawBySource.get(relative)
    const hasAnswerEntry = /ans_rule|NAMED_ANS_RULE|num_cmp|fun_cmp|Formula\(|Compute\(|Real\(/i.test(text)
    const hasGeneratedChoiceObject = /RadioButtons\s*\(|MultipleChoice\s*\(|new_checkbox_multiple_choice|parserRadioButtons/i.test(text)
    const hasStaticChoiceArray = /(?:RadioButtons|MultipleChoice)\s*\(\s*\[[\s\S]{0,900}?['"][^'"]+['"][\s\S]{0,900}?['"][^'"]+['"]/i.test(text)
    hits.push({
      source_file: relative,
      subject: item?.subject ?? '',
      chapter: item?.chapter ?? '',
      section: item?.section ?? '',
      candidate_track_ids: item?.candidate_track_ids ?? [],
      has_answer_entry: hasAnswerEntry,
      has_generated_choice_object: hasGeneratedChoiceObject,
      has_static_choice_array: hasStaticChoiceArray,
    })
  }

  const explicitFixedOnly = hits.filter((hit) => hit.has_static_choice_array && !hit.has_answer_entry)
  return {
    choiceWidgetFiles: hits.length,
    safeDirectImportCount: 0,
    explicitFixedOnlyWidgetFiles: explicitFixedOnly.length,
    mixedOrGeneratedCount: hits.length - explicitFixedOnly.length,
    bySubject: summarize(hits, (hit) => hit.subject || 'Unknown').slice(0, 20),
    fixedOnlySamples: explicitFixedOnly.slice(0, 20),
    recommendation:
      'No safe direct fixed-choice import from the current WeBWorK raw extract. Some source files appear to use fixed-choice widgets, but the mined rows do not contain extracted choices/correct answers and many widgets are generated or mixed with answer-entry rules.',
  }
}

const opendsa = readJson(opendsaPath).items ?? []
const trivia = readJson(triviaPath).items ?? []
const webwork = readJson(webworkPath).items ?? []

const openDsaCandidates = opendsa.filter(isRemainingOpenDsaCandidate)
const triviaCandidates = trivia.filter(isRemainingTriviaCandidate)
const webworkClassification = classifyWebwork(webwork)

const payload = {
  generated: '2026-05-03',
  scope: 'Remaining fixed-choice OER candidates after existing OpenDSA, OpenTrivia brain-teaser, OpenSAT, IMS, and OpenIntro slide imports.',
  criteria: [
    'prompt present and self-contained',
    'correct answer present',
    'at least two distinct wrong choices',
    'no obvious answer leakage',
    'no template placeholders in playable text',
    'category/course alignment and no high-churn current-events categories',
  ],
  opendsa: {
    totalRaw: opendsa.length,
    candidateCount: openDsaCandidates.length,
    byCollection: summarize(openDsaCandidates, (item) => item.collection_id),
    recommendations: Object.fromEntries(Object.entries(openDsaTargets).map(([key, value]) => [key, value])),
    samples: openDsaCandidates.slice(0, 10).map((item) => ({
      source_id: item.source_id,
      collection_id: item.collection_id,
      prompt_text: item.prompt_text,
      correct_answer: item.solution_text,
      wrong_count: distinctWrongChoices(item, 'choices', 'solution_text').length,
    })),
  },
  openTriviaQA: {
    totalRaw: trivia.length,
    candidateCount: triviaCandidates.length,
    byCategory: summarize(triviaCandidates, (item) => item.category),
    recommendations: Object.fromEntries(Object.entries(triviaTargets).map(([key, value]) => [key, value])),
    excludedCategories: [
      'brain-teasers already imported',
      'movies/television/music/celebrities/sports/video-games/entertainment/hobbies/rated/newest/people/world as too entertainment-heavy, too broad, or time-sensitive',
      'religion-faith as not a current course-aligned safe import without a dedicated review policy',
    ],
    samples: triviaCandidates.slice(0, 10).map((item) => ({
      source_id: item.source_id,
      category: item.category,
      prompt_text: item.prompt_text,
      correct_answer: item.correct_answer,
      wrong_count: distinctWrongChoices(item, 'answer_choices', 'correct_answer').length,
    })),
  },
  webworkOPL: webworkClassification,
}

fs.writeFileSync(outJson, JSON.stringify(payload, null, 2), 'utf8')

const lines = [
  '# Remaining OER Fixed-Choice Candidate Audit',
  '',
  'Generated: 2026-05-03',
  '',
  'Scope: WeBWorK OPL, OpenDSA leftovers, and OpenTriviaQA categories after the existing OpenDSA Algorithms/Software/Formal Languages, OpenTrivia Brain Teasers, OpenSAT, IMS Tutorials, and OpenIntro Statistics Slides imports.',
  '',
  'Safe direct-import criteria: self-contained prompt, correct answer, at least two distinct wrong choices, no obvious answer leakage, no unresolved template placeholders, and alignment to an existing track.',
  '',
  '## Recommended Imports',
  '',
  `- OpenDSA leftovers: ${payload.opendsa.candidateCount} safe fixed-choice candidates.`,
  `- OpenTriviaQA educational categories: ${payload.openTriviaQA.candidateCount} safe fixed-choice candidates.`,
  `- WeBWorK OPL: ${payload.webworkOPL.safeDirectImportCount} safe direct fixed-choice candidates from the current raw extract.`,
  '',
  '## OpenDSA Leftovers',
  '',
]

for (const row of payload.opendsa.byCollection) {
  const recommendation = payload.opendsa.recommendations[row.key]
  lines.push(`- \`${row.key}\`: ${row.count} candidates -> ${recommendation.track}. ${recommendation.reason}.`)
}
if (!payload.opendsa.byCollection.length) lines.push('- No remaining safe OpenDSA fixed-choice imports found.')

lines.push('', '## OpenTriviaQA Educational Categories', '')
for (const row of payload.openTriviaQA.byCategory) {
  const recommendation = payload.openTriviaQA.recommendations[row.key]
  lines.push(`- \`${row.key}\`: ${row.count} candidates -> ${recommendation.track}. ${recommendation.reason}.`)
}

lines.push('', 'Excluded OpenTriviaQA categories:', '')
for (const entry of payload.openTriviaQA.excludedCategories) lines.push(`- ${entry}.`)

lines.push('', '## WeBWorK OPL', '')
lines.push(`- Raw extracted problems: ${webwork.length}.`)
lines.push(`- Files with radio/popup/checkbox-style widgets in source scan: ${payload.webworkOPL.choiceWidgetFiles}.`)
lines.push(`- Explicit fixed-only widget files with no answer-entry dependency in source scan: ${payload.webworkOPL.explicitFixedOnlyWidgetFiles}.`)
lines.push(`- Safe direct imports from current raw JSON: ${payload.webworkOPL.safeDirectImportCount}.`)
lines.push(`- Mixed/generated widget files requiring conversion: ${payload.webworkOPL.mixedOrGeneratedCount}.`)
lines.push(`- Recommendation: ${payload.webworkOPL.recommendation}`)

lines.push('', 'Top WeBWorK widget subjects:', '')
for (const row of payload.webworkOPL.bySubject.slice(0, 10)) lines.push(`- \`${row.key}\`: ${row.count}`)

lines.push('', '## Notes', '')
lines.push('- OpenDSA `open-dsa::mengbridgecourse` is the only remaining direct-import OpenDSA collection that passes the current fixed-choice and alignment checks.')
lines.push('- OpenTriviaQA counts are category-level candidates, not a recommendation to bulk-import without the same generated import guardrails used for brain-teasers.')
lines.push('- WeBWorK should stay out of direct app wiring until a dedicated `.pg` parser extracts fixed choice text, correct choice, generated variables, and image/context dependencies.')

fs.writeFileSync(outMd, `${lines.join('\n')}\n`, 'utf8')
console.log(`Wrote ${outMd}`)
console.log(`Wrote ${outJson}`)
