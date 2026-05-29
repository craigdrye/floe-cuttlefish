import { buildUniversityAcademicQuestionCatalog } from './src/data/questionCatalog/universityAcademic.ts'
const cat = buildUniversityAcademicQuestionCatalog()
const q = cat.logicCriticalThinking || []
console.log('logicCriticalThinking count:', q.length)
const byChapter = {}
for (const x of q) byChapter[x.chapter] = (byChapter[x.chapter]||0)+1
console.log(JSON.stringify(byChapter, null, 2))
console.log('Titles:', q.map(x=>x.title).join(' | '))
console.log('Max id:', Math.max(...q.map(x=>x.id)))
