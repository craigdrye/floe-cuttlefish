# Country Outlines Asset Plan

This folder holds PNG-backed `Guess the Country Shape` assets. The goal is to replace SVG clue-card placeholders with clean country outline images that are playable from silhouette alone.

## Generation Rules

- Use 2x2 source grids, then crop into four square PNGs.
- Use flat map silhouettes or outline-map illustrations on a clean parchment background.
- Recolor each cropped country with a distinct, random-feeling palette so the course does not feel monochrome.
- Include only the country outline and minimal geographic context when helpful, such as nearby islands belonging to the country.
- Avoid labels, captions, flags, borders with neighboring countries, city markers, UI, logos, and watermarks.
- Keep filenames lowercase kebab-case.

## Current Set

- [x] `italy.png`
- [x] `new-zealand.png`
- [x] `japan.png`
- [x] `australia.png`
- [x] `canada.png`
- [x] `brazil.png`
- [x] `chile.png`
- [x] `india.png`
- [x] `france.png`
- [x] `indonesia.png`
- [x] `south-africa.png`
- [x] `sri-lanka.png`
- [x] `mexico.png`
- [x] `norway.png`
- [x] `turkey.png`
- [x] `greece.png`
- [x] `madagascar.png`
- [x] `philippines.png`
- [x] `vietnam.png`
- [x] `thailand.png`
- [x] `egypt.png`
- [x] `argentina.png`
- [x] `peru.png`
- [x] `united-kingdom.png`

## Generated Sheets

- `country-outlines-grid-v1.png`: generated 2x2 source sheet; quadrants are Italy, New Zealand, Japan, and Australia.
- `country-outlines-grid-v2.png`: generated 2x2 source sheet; quadrants are Canada, Brazil, Chile, and India.
- `country-outlines-grid-v3.png`: generated 2x2 source sheet; quadrants are France, Indonesia, South Africa, and Sri Lanka.
- `country-outlines-grid-v4.png`: generated 2x2 source sheet; quadrants are Mexico, Norway, Turkey, and Greece.
- `country-outlines-grid-v5.png`: generated 2x2 source sheet; quadrants are Madagascar, Philippines, Vietnam, and Thailand.
- `country-outlines-grid-v6.png`: generated 2x2 source sheet; quadrants are Egypt, Argentina, Peru, and United Kingdom.

## Review Notes

- `egypt.png` is playable but visually plain because the country outline has several straight desert borders; regenerate later if it feels too dull in-app.

## Color Pass

- Individual cropped PNGs were recolored locally after generation so each country outline has a distinct foreground color on a warm paper background.
- Source grids preserve the original generated dark silhouette sheets.
