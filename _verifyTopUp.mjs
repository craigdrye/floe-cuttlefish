import { logicCriticalThinkingTopUpQuestions as q } from './src/data/questionCatalog/logicCriticalThinkingTopUp.ts'
console.log('count:', q.length)
const ids = q.map(x=>x.id)
console.log('id range:', Math.min(...ids), '->', Math.max(...ids))
console.log('unique ids:', new Set(ids).size === ids.length)
console.log('all generated:', q.every(x=>x.generated === true))
console.log('all 3 distractors:', q.every(x=>x.answers.filter(a=>!a.correct).length === 3))
console.log('all University topic:', q.every(x=>x.topic === 'University'))
const chs = {}
for (const x of q) chs[x.chapter]=(chs[x.chapter]||0)+1
console.log(JSON.stringify(chs,null,2))
