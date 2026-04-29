export function calculateExpression(expression: string) {
  const trimmed = expression.trim()
  if (!trimmed) return ''

  const normalized = trimmed.replace(/×/g, '*').replace(/÷/g, '/').replace(/\^/g, '**')
  if (!/^[\d\s+\-*/().%]+$/.test(normalized)) return 'Use numbers and + - * / only'

  try {
    const result = Function(`"use strict"; return (${normalized})`)()
    return Number.isFinite(result) ? String(Math.round(result * 10000) / 10000) : 'No finite result'
  } catch {
    return 'Check the expression'
  }
}
