import { buildUniversityAcademicQuestionCatalog } from './src/data/questionCatalog/universityAcademic.ts'
const cat = buildUniversityAcademicQuestionCatalog()
const q = cat.logicCriticalThinking || []
for (const x of q) console.log(`[${x.chapter}] ${x.title} :: ${x.prompt}`)
