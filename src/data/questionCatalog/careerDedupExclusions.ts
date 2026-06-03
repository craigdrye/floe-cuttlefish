import type { Question } from './types'

// Conservative dedup (2026-06): catalog ids of near-verbatim duplicate questions to drop,
// keyed by track. Identified by per-track agent review of mechanically-detected near-dup
// clusters; only genuine same-content/reworded copies are listed (parametrized numeric
// drills and paired exam-framing sets were intentionally kept). Applied as a final filter
// in buildCareerQuestionCatalog. Two would-be removals were skipped to keep their chapter
// at >=8 (mpre 34940066, salesFundamentals 7660006).
// Total removed: 45 questions across 11 tracks.
export const CAREER_DEDUP_EXCLUSIONS: Record<string, ReadonlySet<number>> = {
  brainBurners: new Set([334187]),
  cpaExam: new Set([4610058, 4610086, 4610114]),
  cybersecOpsJargon: new Set([7306021, 7306022, 7617036, 7617039]),
  financialModeling: new Set([7315014]),
  patentBar: new Set([4101702, 4101705, 4614066, 4614075, 4614077, 4614078, 4614082, 4614088, 4614090, 4614091, 4614092, 4614095, 4614098, 4614102, 4614103, 4614107, 4614116, 4614117, 4614119, 4614123, 4614124]),
  pmpWrangler: new Set([4612068, 4612093, 4612114, 4612118, 4612122]),
  professionalEthics: new Set([7618017]),
  quantAdvanced: new Set([19303]),
  series63: new Set([34820018, 34820033]),
  series79: new Set([34830007, 34830008, 34830017, 34830020]),
  uxResearch: new Set([7301003, 7301030]),
}

export function applyCareerDedupExclusions(
  catalog: Record<string, Question[]>,
): Record<string, Question[]> {
  const result: Record<string, Question[]> = {}
  for (const [trackId, questions] of Object.entries(catalog)) {
    const drop = CAREER_DEDUP_EXCLUSIONS[trackId]
    result[trackId] = drop ? questions.filter((q) => !drop.has(q.id)) : questions
  }
  return result
}
