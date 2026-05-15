import type { Track } from './trackUtils'

/** Buckets for adult professional course browsing (e.g. Business/Finance). */
export type CourseDepthCategory = 'fundamentals' | 'qualifications' | 'interview'

/**
 * Classify a track into Fundamentals vs Qualifications vs Interview prep
 * using title, subtitle, skills, and discipline text.
 */
export function inferCourseDepthCategory(track: Pick<Track, 'title' | 'subtitle' | 'discipline' | 'skills'>): CourseDepthCategory {
  const text = [track.title, track.subtitle, track.discipline, ...track.skills].join(' ')

  if (/\bexam prep\b/i.test(track.discipline)) return 'qualifications'

  // Interview-style prep (cases, brainteasers, technical screens, quant interviews)
  if (
    /\binterview\b/i.test(text) ||
    /\bscreening\b/i.test(text) ||
    /\bcase (study|interview|prep)\b/i.test(text) ||
    /\bbrain\s*teaser|brainteaser|brain burner\b/i.test(text) ||
    /\btechnical (screen|prep)\b/i.test(text) ||
    /\bquant interview\b/i.test(text) ||
    /\bconsulting cases\b/i.test(text)
  ) {
    return 'interview'
  }

  // Licenses, exams, professional credentials (Series 86, CPA, medical coding, etc.)
  if (
    /\bseries\s*\d+/i.test(text) ||
    /\bexam prep\b/i.test(text) ||
    /\b(cfa|cpa|cma|frm|caia|cams|crcm|ccep|cdf|nerc|patent bar|aigp|api\s*510|socra|acrp)\b/i.test(text) ||
    /\blicense\b/i.test(text) ||
    /\b(certification|charter|board exam|professional exam)\b/i.test(text) ||
    /\b(cpc|customs broker|medical coding|patent bar|cdf[cm])\b/i.test(text) ||
    /\b(appraiser|operator certification)\b/i.test(text)
  ) {
    return 'qualifications'
  }

  // Default: generic skills, modeling, compliance literacy, career foundations
  return 'fundamentals'
}
