const fs = require('node:fs')
const path = require('node:path')

const repoRoot = path.resolve(__dirname, '..')
const rawCollectionsDir = path.join(repoRoot, 'data', 'raw_collections')

const sourceStrategies = {
  numbas: {
    action: 'split-new-families',
    rationale:
      'Large math reservoir with decent candidate tags, but too broad to dump into one existing course.',
    recommendedTracks: ['AP Calculus AB', 'AP Calculus BC', 'AP Statistics', 'Linear Algebra'],
    proposedCourses: ['Engineering Mechanics', 'Algebra Workout', 'Quantitative Methods'],
  },
  numbas_exams: {
    action: 'split-new-families',
    rationale:
      'Assessment-style math bundles that naturally support diagnostics and chaptered challenge tracks.',
    recommendedTracks: ['AP Calculus AB', 'AP Calculus BC', 'Linear Algebra', 'General Physics I (Mechanics)'],
    proposedCourses: ['Math Diagnostics', 'Mechanics Drill Sets'],
  },
  webwork_opl: {
    action: 'split-new-families',
    rationale:
      'Huge math corpus with weak metadata; best used as a depth reservoir after subject cleanup.',
    recommendedTracks: ['AP Calculus AB', 'AP Calculus BC', 'Linear Algebra', 'Quant Interview Advanced'],
    proposedCourses: ['Contest Math Drills', 'College Algebra Workout'],
  },
  opendsa: {
    action: 'map-and-expand',
    rationale:
      'Strong CS fit and already tagged toward existing computing courses.',
    recommendedTracks: [
      'Introduction to Computer Science (Python)',
      'Software Engineering Interview Prep',
      'Data Structures',
      'Logic & Critical Thinking',
    ],
    proposedCourses: ['Algorithms Drills'],
  },
  open_logic_project: {
    action: 'map-and-expand',
    rationale:
      'Excellent philosophy/logic source and one of the cleanest fits with Floe’s specialization.',
    recommendedTracks: ['Philosophy', 'Logic & Critical Thinking', 'Moral Crossroads'],
    proposedCourses: ['Formal Logic', 'Set Theory and Proof'],
  },
  opensat: {
    action: 'map-existing',
    rationale:
      'Already points cleanly at SAT, reading/writing, and math-prep style tracks.',
    recommendedTracks: [
      'SAT',
      'Logic & Critical Thinking',
      '11+ Exam Prep (UK)',
      'AP Calculus AB',
    ],
    proposedCourses: [],
  },
  openintro_ims: {
    action: 'map-and-expand',
    rationale:
      'Strong statistics/data science fit with some quant and medical overlap.',
    recommendedTracks: [
      'AP Statistics',
      'Introduction to Data Science',
      'Quant Interview Core',
      'Medical Reasoning',
    ],
    proposedCourses: ['Statistics Lab'],
  },
  openintro_stats: {
    action: 'map-existing',
    rationale:
      'Compact but high-signal statistics collection.',
    recommendedTracks: ['AP Statistics', 'Introduction to Data Science'],
    proposedCourses: [],
  },
  ims_tutorials: {
    action: 'map-existing',
    rationale:
      'Small but clean MCQ-style statistics/tutorial source.',
    recommendedTracks: ['AP Statistics', 'Introduction to Data Science'],
    proposedCourses: [],
  },
  oilabs_tidy: {
    action: 'hold-for-labs',
    rationale:
      'Applied lab prompts, valuable as resources but not app-native quiz cards yet.',
    recommendedTracks: ['Introduction to Data Science', 'AP Statistics'],
    proposedCourses: ['Data Labs'],
  },
  oilabs_jamovi: {
    action: 'hold-for-labs',
    rationale:
      'Applied lab prompts rather than clean question cards.',
    recommendedTracks: ['Introduction to Data Science', 'AP Statistics'],
    proposedCourses: ['Data Labs'],
  },
  oilabs_jasp: {
    action: 'hold-for-labs',
    rationale:
      'Applied lab prompts rather than clean question cards.',
    recommendedTracks: ['Introduction to Data Science', 'AP Statistics'],
    proposedCourses: ['Data Labs'],
  },
  oilabs_stata: {
    action: 'hold-for-labs',
    rationale:
      'Applied lab prompts rather than clean question cards.',
    recommendedTracks: ['Introduction to Data Science', 'AP Statistics'],
    proposedCourses: ['Data Labs'],
  },
  openintro_labs_rguroo: {
    action: 'hold-for-labs',
    rationale:
      'Applied lab prompts rather than clean question cards.',
    recommendedTracks: ['Introduction to Data Science', 'AP Statistics'],
    proposedCourses: ['Data Labs'],
  },
  pharma_hands_on: {
    action: 'hold-for-labs',
    rationale:
      'Useful applied tasks, but needs heavy transformation before becoming learner-facing question cards.',
    recommendedTracks: ['Medical Reasoning', 'Introduction to Data Science'],
    proposedCourses: ['Clinical Data Labs'],
  },
  staar_2018: {
    action: 'map-existing',
    rationale:
      'Good enrichment for school-stage reading, math, science, and history tracks we already have.',
    recommendedTracks: ['NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'AP U.S. History', 'Middle School Earth & Space Science'],
    proposedCourses: [],
  },
  staar_2019: {
    action: 'map-existing',
    rationale:
      'Good enrichment for school-stage reading, math, science, and history tracks we already have.',
    recommendedTracks: ['NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'AP U.S. History', 'Middle School Earth & Space Science'],
    proposedCourses: [],
  },
  staar_2021: {
    action: 'map-existing',
    rationale:
      'Good enrichment for school-stage reading, math, science, and history tracks we already have.',
    recommendedTracks: ['NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'AP U.S. History', 'Middle School Earth & Space Science'],
    proposedCourses: [],
  },
  staar_2022: {
    action: 'map-existing',
    rationale:
      'Good enrichment for school-stage reading, math, science, and history tracks we already have.',
    recommendedTracks: ['NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'AP U.S. History', 'Middle School Earth & Space Science'],
    proposedCourses: [],
  },
  staar_2023: {
    action: 'map-existing',
    rationale:
      'Good enrichment for school-stage tracks; sampler-sized but still useful.',
    recommendedTracks: ['NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'AP U.S. History', 'Middle School Earth & Space Science'],
    proposedCourses: [],
  },
  staar_2023_redesign: {
    action: 'map-existing',
    rationale:
      'Strongest Texas batch for school-stage enrichment because the redesign forms are large and mixed-subject.',
    recommendedTracks: ['NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'AP U.S. History', 'Middle School Earth & Space Science'],
    proposedCourses: [],
  },
  staar_2024_rationales: {
    action: 'map-existing',
    rationale:
      'Official rationale material, useful after cleanup but still belongs in current school-stage tracks.',
    recommendedTracks: ['NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'AP U.S. History', 'Middle School Earth & Space Science'],
    proposedCourses: [],
  },
  staar_2025_rationales: {
    action: 'map-existing',
    rationale:
      'Official rationale material, useful after cleanup but still belongs in current school-stage tracks.',
    recommendedTracks: ['NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'AP U.S. History', 'Middle School Earth & Space Science'],
    proposedCourses: [],
  },
  staar_alt2_2023: {
    action: 'map-existing',
    rationale:
      'Best treated as differentiated primary/high support material inside existing stage-based tracks.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  staar_alt2_2025: {
    action: 'map-existing',
    rationale:
      'Best treated as differentiated primary/high support material inside existing stage-based tracks.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  nysed_math_2017: {
    action: 'map-existing',
    rationale:
      'Strong grade-banded math enrichment already aligned to primary/high school math ladders.',
    recommendedTracks: ['Class 3 Math', 'Class 4 Math', 'Class 5 Math', 'Class 6 Math', 'Class 7 Math', 'Class 8 Math'],
    proposedCourses: [],
  },
  nysed_math_2018: {
    action: 'map-existing',
    rationale:
      'Strong grade-banded math enrichment already aligned to primary/high school math ladders.',
    recommendedTracks: ['Class 3 Math', 'Class 4 Math', 'Class 5 Math', 'Class 6 Math', 'Class 7 Math', 'Class 8 Math'],
    proposedCourses: [],
  },
  nysed_math_2019: {
    action: 'map-existing',
    rationale:
      'Strong grade-banded math enrichment already aligned to primary/high school math ladders.',
    recommendedTracks: ['Class 3 Math', 'Class 4 Math', 'Class 5 Math', 'Class 6 Math', 'Class 7 Math', 'Class 8 Math'],
    proposedCourses: [],
  },
  nysed_math_2021: {
    action: 'map-existing',
    rationale:
      'Strong grade-banded math enrichment already aligned to primary/high school math ladders.',
    recommendedTracks: ['Class 3 Math', 'Class 4 Math', 'Class 5 Math', 'Class 6 Math', 'Class 7 Math', 'Class 8 Math'],
    proposedCourses: [],
  },
  nysed_math_2022: {
    action: 'map-existing',
    rationale:
      'Strong grade-banded math enrichment already aligned to primary/high school math ladders.',
    recommendedTracks: ['Class 3 Math', 'Class 4 Math', 'Class 5 Math', 'Class 6 Math', 'Class 7 Math', 'Class 8 Math'],
    proposedCourses: [],
  },
  nysed_math_2023: {
    action: 'map-existing',
    rationale:
      'Strong grade-banded math enrichment already aligned to primary/high school math ladders.',
    recommendedTracks: ['Class 3 Math', 'Class 4 Math', 'Class 5 Math', 'Class 6 Math', 'Class 7 Math', 'Class 8 Math'],
    proposedCourses: [],
  },
  nysed_math_2024: {
    action: 'map-existing',
    rationale:
      'Strong grade-banded math enrichment already aligned to primary/high school math ladders.',
    recommendedTracks: ['Class 3 Math', 'Class 4 Math', 'Class 5 Math', 'Class 6 Math', 'Class 7 Math', 'Class 8 Math'],
    proposedCourses: [],
  },
  nysed_math_2025: {
    action: 'map-existing',
    rationale:
      'Strong grade-banded math enrichment already aligned to primary/high school math ladders.',
    recommendedTracks: ['Class 3 Math', 'Class 4 Math', 'Class 5 Math', 'Class 6 Math', 'Class 7 Math', 'Class 8 Math'],
    proposedCourses: [],
  },
  nysed_ela_2015: {
    action: 'map-existing',
    rationale:
      'Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  nysed_ela_2016: {
    action: 'map-existing',
    rationale:
      'Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  nysed_ela_2017: {
    action: 'map-existing',
    rationale:
      'Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  nysed_ela_2018: {
    action: 'map-existing',
    rationale:
      'Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  nysed_ela_2019: {
    action: 'map-existing',
    rationale:
      'Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  nysed_ela_2021: {
    action: 'map-existing',
    rationale:
      'Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  nysed_ela_2022: {
    action: 'map-existing',
    rationale:
      'Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  nysed_ela_2023: {
    action: 'map-existing',
    rationale:
      'Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  nysed_ela_2024: {
    action: 'map-existing',
    rationale:
      'Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  nysed_ela_2025: {
    action: 'map-existing',
    rationale:
      'Useful grade-banded reading/vocab enrichment for the school ladder rather than a new course family.',
    recommendedTracks: ['NAPLAN Prep (Year 3)', 'NAPLAN Prep (Year 5)', 'NAPLAN Prep (Year 7)', 'NAPLAN Prep (Year 9)'],
    proposedCourses: [],
  },
  nysed_science_2024: {
    action: 'map-existing',
    rationale:
      'Direct fit for school science tracks that already exist.',
    recommendedTracks: ['CK-12 Science & Math', 'Khan Academy Foundations', 'Middle School Earth & Space Science'],
    proposedCourses: [],
  },
  nysed_science_2025: {
    action: 'map-existing',
    rationale:
      'Direct fit for school science tracks that already exist.',
    recommendedTracks: ['CK-12 Science & Math', 'Khan Academy Foundations', 'Middle School Earth & Space Science'],
    proposedCourses: [],
  },
  opentriviaqa: {
    action: 'hold-low-priority',
    rationale:
      'Massive volume, but too broad and off-brand for Floe’s current specialization without aggressive filtering.',
    recommendedTracks: ['Brain Burners', 'AP U.S. History', 'Philosophy'],
    proposedCourses: ['Trivia Sprint', 'Culture and Media Quiz'],
  },
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

function summarizeCollection(folderName) {
  const folder = path.join(rawCollectionsDir, folderName)
  const jsonFiles = fs.readdirSync(folder).filter((name) => name.endsWith('.json')).sort()
  const data = readJson(path.join(folder, jsonFiles[0]))
  const items = data.items ?? []
  const candidateCounts = new Map()
  const collectionCounts = new Map()

  for (const item of items) {
    for (const trackId of item.candidate_track_ids ?? []) {
      candidateCounts.set(trackId, (candidateCounts.get(trackId) ?? 0) + 1)
    }
    const collectionId = item.collection_id ?? 'unknown'
    collectionCounts.set(collectionId, (collectionCounts.get(collectionId) ?? 0) + 1)
  }

  const strategy = sourceStrategies[folderName] ?? {
    action: 'review-manually',
    rationale: 'No explicit strategy has been written for this source yet.',
    recommendedTracks: [],
    proposedCourses: [],
  }

  return {
    folderName,
    sourceName: data.source ?? folderName,
    questionCount: data.questionCount ?? items.length,
    collectionCount: data.collectionCount ?? collectionCounts.size,
    license: data.license ?? 'unspecified',
    action: strategy.action,
    rationale: strategy.rationale,
    recommendedTracks: strategy.recommendedTracks,
    proposedCourses: strategy.proposedCourses,
    topCandidateTrackIds: Array.from(candidateCounts.entries())
      .sort((left, right) => right[1] - left[1])
      .slice(0, 6)
      .map(([trackId, count]) => ({ trackId, count })),
    largestSubcollections: Array.from(collectionCounts.entries())
      .sort((left, right) => right[1] - left[1])
      .slice(0, 6)
      .map(([collectionId, count]) => ({ collectionId, count })),
  }
}

function compareRows(left, right) {
  if (right.questionCount !== left.questionCount) return right.questionCount - left.questionCount
  return left.folderName.localeCompare(right.folderName)
}

function buildMarkdown(rows) {
  const totalQuestions = rows.reduce((sum, row) => sum + row.questionCount, 0)
  const actionCounts = rows.reduce((acc, row) => {
    acc[row.action] = (acc[row.action] ?? 0) + 1
    return acc
  }, {})

  const lines = [
    '# Raw Collection Course Mapping',
    '',
    `Generated on ${new Date().toISOString()}.`,
    '',
    '## Overall',
    '',
    `- Raw source folders: ${rows.length}`,
    `- Raw mined questions/tasks: ${totalQuestions}`,
    `- Map into existing courses now: ${actionCounts['map-existing'] ?? 0}`,
    `- Map existing + expand with new families: ${actionCounts['map-and-expand'] ?? 0}`,
    `- Split into new course families: ${actionCounts['split-new-families'] ?? 0}`,
    `- Hold for labs/resources/later: ${(actionCounts['hold-for-labs'] ?? 0) + (actionCounts['hold-low-priority'] ?? 0)}`,
    '',
    '## Recommended Sequence',
    '',
    '1. Map official school assessment sources into existing school tracks.',
    '2. Create focused course families for the large math/logic/CS reservoirs.',
    '3. Hold lab-style and trivia-heavy sources until the quiz-card pipeline is stronger.',
    '',
    '## Sources',
    '',
  ]

  for (const row of rows) {
    lines.push(`### ${row.sourceName}`)
    lines.push('')
    lines.push(`- Folder: \`${row.folderName}\``)
    lines.push(`- Questions/tasks: ${row.questionCount}`)
    lines.push(`- Subcollections: ${row.collectionCount}`)
    lines.push(`- License: ${row.license}`)
    lines.push(`- Recommended action: \`${row.action}\``)
    lines.push(`- Rationale: ${row.rationale}`)
    lines.push(
      `- Best existing track targets: ${row.recommendedTracks.length > 0 ? row.recommendedTracks.join(', ') : 'none suggested yet'}`,
    )
    lines.push(
      `- Proposed new course families: ${row.proposedCourses.length > 0 ? row.proposedCourses.join(', ') : 'none'}`,
    )
    lines.push(
      `- Top candidate track ids: ${
        row.topCandidateTrackIds.length > 0
          ? row.topCandidateTrackIds.map((entry) => `${entry.trackId} (${entry.count})`).join(', ')
          : 'none'
      }`,
    )
    lines.push(
      `- Largest source subcollections: ${
        row.largestSubcollections.length > 0
          ? row.largestSubcollections.map((entry) => `${entry.collectionId} (${entry.count})`).join(', ')
          : 'none'
      }`,
    )
    lines.push('')
  }

  return `${lines.join('\n')}\n`
}

function main() {
  const rows = fs
    .readdirSync(rawCollectionsDir)
    .filter((name) => fs.statSync(path.join(rawCollectionsDir, name)).isDirectory())
    .map(summarizeCollection)
    .sort(compareRows)

  const outputDir = path.join(repoRoot, 'reports')
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'raw-collection-course-mapping.json'), JSON.stringify(rows, null, 2), 'utf8')
  fs.writeFileSync(path.join(outputDir, 'raw-collection-course-mapping.md'), buildMarkdown(rows), 'utf8')

  console.log(`Wrote mapping report for ${rows.length} raw sources.`)
  for (const row of rows.slice(0, 12)) {
    console.log(`${row.folderName}: ${row.questionCount} -> ${row.action}`)
  }
}

main()
