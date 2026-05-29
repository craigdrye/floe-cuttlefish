// Simple recommendation engine logic

export function getRecommendations(answers: Record<string, string>): string[] {
  const recommendations: string[] = []

  // Base it on their interests
  if (answers.interest === 'universe') {
    recommendations.push('astrophysics')
    recommendations.push('quant') // Math helps with physics
  }
  
  if (answers.interest === 'money') {
    recommendations.push('quant') // Finance math
  }

  if (answers.interest === 'logic') {
    recommendations.push('quant')
  }

  // Base it on their hurdle
  if (answers.hurdle === 'math') {
    // If they struggle with math, maybe suggest a gentler start or avoid the hardest math tracks
    if (!recommendations.includes('quant')) {
       recommendations.push('quant') // Exposure therapy!
    }
  }

  // Fallback if we don't have specific mappings for their answers yet
  if (recommendations.length === 0) {
    recommendations.push('quant')
  }

  // De-duplicate
  return Array.from(new Set(recommendations))
}
