# Question Rating Storage

Floe now shows a learner-facing 1-5 star rating on every quiz question.

Ratings are saved locally first in `questionQualityRatings[questionId].learnerRating`, then posted to:

```txt
POST /api/question-rating
```

## Vercel Storage Setup

The API route is designed for Vercel Redis/KV-compatible storage. Add a Vercel Redis/KV integration, or any Upstash Redis instance, and expose either of these env var pairs:

```txt
KV_REST_API_URL
KV_REST_API_TOKEN
```

or:

```txt
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

Without those env vars the route still returns successfully with `stored: false`, so local development and static previews keep working. The learner's rating remains saved on that browser.

## Stored Keys

Raw recent events:

```txt
floe:question-ratings:v1
```

This is a Redis list containing JSON events. It keeps the latest 50,000 submissions.

Per-question summary counters:

```txt
floe:question-ratings:summary:{questionId}
```

Fields include:

```txt
count
sum
rating:1
rating:2
rating:3
rating:4
rating:5
latestAt
trackId
trackTitle
chapter
questionTitle
```

Latest rating per anonymous browser for a question:

```txt
floe:question-ratings:latest:{questionId}
```

Question metadata snapshot:

```txt
floe:question-ratings:question:{questionId}
```

## Privacy Shape

The client sends an anonymous random browser id from localStorage. It does not send the learner's name or email. The API stores user agent for debugging coarse device/browser issues, but not IP address.

## Later Export

Use the Vercel/Upstash dashboard or a private admin script with the same REST token to read:

```txt
LRANGE floe:question-ratings:v1 0 -1
```

For question-level averages:

```txt
HGETALL floe:question-ratings:summary:{questionId}
```

Average rating = `sum / count`.
