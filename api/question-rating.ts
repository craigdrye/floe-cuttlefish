const EVENT_LIST_KEY = 'floe:question-ratings:v1'
const MAX_EVENTS_TO_KEEP = 50000

type ApiRequest = {
  method?: string
  body?: unknown
  headers?: Record<string, string | string[] | undefined>
}

type ApiResponse = {
  setHeader: (name: string, value: string) => void
  status: (statusCode: number) => {
    json: (body: unknown) => void
    end: () => void
  }
}

function stringValue(value: unknown, maxLength = 240) {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, maxLength) : ''
}

function numberValue(value: unknown) {
  return typeof value === 'number' && Number.isFinite(value) ? value : null
}

function booleanValue(value: unknown) {
  return typeof value === 'boolean' ? value : null
}

function redisConfig() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  return { url: url.replace(/\/$/, ''), token }
}

async function redisPipeline(commands: unknown[][]) {
  const config = redisConfig()
  if (!config) return { stored: false as const, reason: 'missing_redis_env' }

  const response = await fetch(`${config.url}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
  })

  if (!response.ok) {
    const message = await response.text().catch(() => '')
    throw new Error(`Redis pipeline failed: ${response.status} ${message}`.trim())
  }

  return { stored: true as const }
}

export default async function handler(request: ApiRequest, response: ApiResponse) {
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (request.method === 'OPTIONS') {
    response.status(204).end()
    return
  }

  if (request.method !== 'POST') {
    response.status(405).json({ ok: false, error: 'method_not_allowed' })
    return
  }

  const body = typeof request.body === 'object' && request.body !== null ? request.body : {}
  const rating = numberValue(body.rating)
  const questionId = numberValue(body.questionId)

  if (!questionId || !rating || rating < 1 || rating > 5 || !Number.isInteger(rating)) {
    response.status(400).json({ ok: false, error: 'invalid_rating' })
    return
  }

  const submittedAt = new Date().toISOString()
  const event = {
    submittedAt,
    rating,
    questionId,
    questionTitle: stringValue(body.questionTitle),
    chapter: stringValue(body.chapter),
    subTopic: stringValue(body.subTopic),
    trackId: stringValue(body.trackId, 120),
    trackTitle: stringValue(body.trackTitle),
    ageGroup: stringValue(body.ageGroup, 40),
    mode: stringValue(body.mode, 40),
    selectedLesson: stringValue(body.selectedLesson, 80),
    difficulty: numberValue(body.difficulty),
    challengeRating: numberValue(body.challengeRating),
    generated: booleanValue(body.generated),
    prompt: stringValue(body.prompt, 900),
    clientId: stringValue(body.clientId, 120) || 'anonymous',
    userAgent: stringValue(request.headers?.['user-agent'], 240),
  }

  const summaryKey = `floe:question-ratings:summary:${questionId}`
  const latestKey = `floe:question-ratings:latest:${questionId}`
  const metadataKey = `floe:question-ratings:question:${questionId}`
  const eventJson = JSON.stringify(event)

  try {
    const result = await redisPipeline([
      ['LPUSH', EVENT_LIST_KEY, eventJson],
      ['LTRIM', EVENT_LIST_KEY, '0', String(MAX_EVENTS_TO_KEEP - 1)],
      ['HINCRBY', summaryKey, 'count', '1'],
      ['HINCRBYFLOAT', summaryKey, 'sum', String(rating)],
      ['HINCRBY', summaryKey, `rating:${rating}`, '1'],
      ['HSET', summaryKey, 'latestAt', submittedAt, 'trackId', event.trackId, 'trackTitle', event.trackTitle, 'chapter', event.chapter, 'questionTitle', event.questionTitle],
      ['HSET', latestKey, event.clientId, eventJson],
      ['HSET', metadataKey, 'trackId', event.trackId, 'trackTitle', event.trackTitle, 'chapter', event.chapter, 'subTopic', event.subTopic, 'questionTitle', event.questionTitle, 'prompt', event.prompt],
    ])

    response.status(result.stored ? 200 : 202).json({ ok: true, ...result })
  } catch (error) {
    console.error('[Floe] question rating storage failed', error)
    response.status(500).json({ ok: false, error: 'storage_failed' })
  }
}
