import { coreTrackSeeds, collectionGroups } from './src/data/ageCatalog/index.ts'
import { slugifyTrackId } from './src/lib/trackUtils.ts'
import { questionCatalogKeyForTrack, loadQuestionCatalog } from './src/data/questionCatalog/index.ts'
import { normalizeQuestionCatalog } from './src/lib/quizRuntime.ts'

type T = { id: string; ageGroup: string; status: string; title: string; discipline: string; source: string }

// 1) Build the full registered-track list exactly as the app does (core seeds + collection-derived).
const tracks: T[] = []
for (const s of coreTrackSeeds as any[]) {
  tracks.push({ id: s.id, ageGroup: s.ageGroup, status: s.status ?? 'playable', title: s.title, discipline: s.discipline, source: 'core' })
}
const seenTitles = new Set<string>()
for (const g of collectionGroups as any[]) {
  for (const title of g.titles as string[]) {
    const k = title.trim().toLowerCase()
    if (seenTitles.has(k)) continue
    seenTitles.add(k)
    tracks.push({ id: `col-${slugifyTrackId(title)}`, ageGroup: g.ageGroup, status: 'playable', title, discipline: g.discipline, source: 'collection' })
  }
}

// Dedupe track ids (some ids appear under multiple ageGroups intentionally)
const byId = new Map<string, T[]>()
for (const t of tracks) {
  const arr = byId.get(t.id) ?? []
  arr.push(t); byId.set(t.id, arr)
}

// 2) Resolve catalog keys per track and load every needed catalog (raw + normalized).
const neededKeys = new Set<string>()
const keyForTrack = new Map<string, string | null>()
for (const t of tracks) {
  const key = questionCatalogKeyForTrack(t.id, t.ageGroup as any)
  keyForTrack.set(t.id + '@' + t.ageGroup, key)
  if (key) neededKeys.add(key)
}

const rawCatalogs = new Map<string, Record<string, any[]>>()
const normCatalogs = new Map<string, Record<string, any[]>>()
for (const key of neededKeys) {
  const raw = await loadQuestionCatalog(key)
  rawCatalogs.set(key, raw as any)
  try { normCatalogs.set(key, normalizeQuestionCatalog(raw as any)) }
  catch (e) { normCatalogs.set(key, raw as any) }
}

const count = (cat: Record<string, any[]> | undefined, id: string) =>
  cat && Array.isArray(cat[id]) ? cat[id].length : 0

// 3) Registered tracks that resolve to ZERO questions (raw and/or after normalization).
const emptyRaw: any[] = []
const emptyAfterNorm: any[] = []  // had raw rows but normalization stripped them all
for (const [id, variants] of byId) {
  // a track id is "reachable with questions" if ANY of its ageGroup variants resolves to >0
  let bestRaw = 0, bestNorm = 0, picked: T = variants[0], pickedKey: string | null = null
  for (const v of variants) {
    const key = keyForTrack.get(v.id + '@' + v.ageGroup) ?? null
    const r = count(rawCatalogs.get(key ?? ''), id)
    const n = count(normCatalogs.get(key ?? ''), id)
    if (r > bestRaw) { bestRaw = r; picked = v; pickedKey = key }
    if (n > bestNorm) bestNorm = n
  }
  if (bestRaw === 0) emptyRaw.push({ id, ageGroups: variants.map(v=>v.ageGroup).join('/'), status: variants.map(v=>v.status).join('/'), title: picked.title, key: pickedKey, source: variants.map(v=>v.source).join('/') })
  else if (bestNorm === 0) emptyAfterNorm.push({ id, title: picked.title, rawRows: bestRaw, key: pickedKey })
}

// 4) Orphan banks: keys present in ROUTED catalogs with questions but no matching registered track id.
const registeredIds = new Set([...byId.keys()])
const orphanByCatalog = new Map<string, { key: string; raw: number; norm: number }[]>()
for (const [catKey, cat] of rawCatalogs) {
  for (const [bankKey, qs] of Object.entries(cat)) {
    if (!Array.isArray(qs) || qs.length === 0) continue
    if (registeredIds.has(bankKey)) continue
    const arr = orphanByCatalog.get(catKey) ?? []
    arr.push({ key: bankKey, raw: qs.length, norm: count(normCatalogs.get(catKey), bankKey) })
    orphanByCatalog.set(catKey, arr)
  }
}

// ---- Report ----
console.log('REGISTERED TRACKS:', tracks.length, '(unique ids:', byId.size, ')')
console.log('CATALOG KEYS LOADED:', [...neededKeys].sort().join(', '))
console.log()
console.log('=== A) REGISTERED TRACKS WITH ZERO QUESTIONS (show in list but no lessons / hidden) ===')
console.log('count:', emptyRaw.length)
for (const e of emptyRaw.sort((a,b)=>a.id.localeCompare(b.id)))
  console.log(`  [${e.status}] ${e.id}  (age ${e.ageGroups}, key=${e.key}, ${e.source})  "${e.title}"`)
console.log()
console.log('=== B) TRACKS WITH RAW ROWS BUT EMPTY AFTER NORMALIZATION (appear empty in app) ===')
console.log('count:', emptyAfterNorm.length)
for (const e of emptyAfterNorm.sort((a,b)=>a.id.localeCompare(b.id)))
  console.log(`  ${e.id}  rawRows=${e.rawRows} -> 0 playable (key=${e.key})  "${e.title}"`)
console.log()
console.log('=== C) ORPHAN QUESTION BANKS (questions wired, but NO track to reach them) ===')
let orphanTotal = 0
for (const [catKey, arr] of [...orphanByCatalog].sort((a,b)=>a[0].localeCompare(b[0]))) {
  console.log(`  catalog "${catKey}": ${arr.length} orphan keys`)
  for (const o of arr.sort((a,b)=>b.raw-a.raw)) { orphanTotal++; console.log(`     ${o.key}  raw=${o.raw} norm=${o.norm}`) }
}
console.log('orphan key total:', orphanTotal)
