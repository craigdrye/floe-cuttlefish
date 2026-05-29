# City Skyline Silhouettes Asset Plan

This folder holds hard-mode PNG silhouettes for `Guess the City Skyline`. The first attempt used local thresholding from the normal skyline PNGs, but those were too noisy; the current assets are image-model-generated cartoon silhouettes with cleaner landmark outlines.

## Generation Rules

- Generate intentional cartoon skyline silhouettes in 2x2 or 1x2 sheets, then crop.
- Use warm parchment backgrounds and dark navy/black city forms.
- Keep enough landmark, terrain, bridge, water, and skyline outline detail to be playable.
- Keep filenames identical to the normal skyline asset filenames.
- Do not include labels, captions, flags, logos, or watermarks inside the image.

## Current Silhouette Set

- [x] `new-york-city.png`
- [x] `paris.png`
- [x] `sydney.png`
- [x] `london.png`
- [x] `baku.png`
- [x] `tbilisi.png`
- [x] `almaty.png`
- [x] `la-paz.png`
- [x] `medellin.png`
- [x] `valparaiso.png`
- [x] `tallinn.png`
- [x] `muscat.png`
- [x] `sarajevo.png`
- [x] `ljubljana.png`

## Remaining Normal Skyline Cards To Convert Before Hard Mode Inclusion

- [ ] `seattle.png`
- [ ] `toronto.png`
- [ ] `san-francisco.png`
- [ ] `dubai.png`
- [ ] `hong-kong.png`
- [ ] `rome.png`
- [ ] `istanbul.png`
- [ ] `rio-de-janeiro.png`

## Generated Sheets

- `city-skylines-silhouettes-grid-v1.png`: generated 2x2 source sheet; quadrants are New York City, Paris, Sydney, and London.
- `city-skylines-silhouettes-grid-v2.png`: generated 2x2 source sheet; quadrants are Baku, Tbilisi, Almaty, and La Paz.
- `city-skylines-silhouettes-grid-v3.png`: generated 2x2 source sheet; quadrants are Medellin, Valparaiso, Tallinn, and Muscat.
- `city-skylines-silhouettes-grid-v4.png`: generated 1x2 source sheet; panels are Sarajevo and Ljubljana.
