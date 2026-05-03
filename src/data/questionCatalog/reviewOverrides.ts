import type { QuestionReviewOverride } from './types'

// Key format:
// - `${trackId}:${questionId}` for a track-specific override
// - `${questionId}` for a global override when the id is unique enough
export const questionReviewOverrides: Record<string, QuestionReviewOverride> = {}
