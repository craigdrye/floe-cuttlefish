# Subject Artifact Expansion Plan

This folder stages PNG-backed "Guess the Thing" expansions built around recognizable objects from major subject lanes. The intent is to broaden the existing `Guess the Ancient Artifact` track into a wider museum-object quiz without mixing unrelated assets into regional animal/fossil folders.

## Folder Scheme

- `philosophy`
- `humanities`
- `politics-civics`
- `exam-prep`
- `practical-skills`
- `arts-music`
- `geography-history`
- `digital-culture`
- `business-finance`
- `maths`
- `science`

## Generation Rules

- Use 2x2 source grids, then crop into four square PNGs.
- Use one recognizable object per crop.
- Prefer museum-object / field-guide illustrations on a clean neutral background.
- No readable labels, captions, UI, arrows, or watermarks inside generated images.
- Keep filenames lowercase kebab-case.
- Mark duplicates against the existing `Guess the Ancient Artifact` course before generating.

## Already Present In `ancient-artifacts`

These ideas already exist as cards and should not be regenerated unless replacing art:

- `antikythera-mechanism-cartoon.png`
- `code-of-hammurabi-cartoon.png`
- `gilgamesh-tablet-cartoon.png`
- `kish-tablet-cartoon.png`
- `lion-man-cartoon.png`
- `rosetta-stone-cartoon.png`
- `sutton-hoo-helmet-cartoon.png`
- `terracotta-warrior-cartoon.png`

Related existing cards also include Cyrus Cylinder, Jade Burial Suit, Lycurgus Cup, Mask of Tutankhamun, Narmer Palette, Nebra Sky Disk, Nefertiti Bust, Oracle Bone, Phaistos Disc, Standard of Ur, Sulawesi Cave Art, and Warka Vase.

## Priority Batches

### Batch A: Business / Finance

- [x] `lydian-lion-coin.png` - electrum coin stamped with a roaring lion head; first minted coin clue.
- [x] `voc-share-certificate.png` - early Dutch East India Company share certificate; first public stock clue.
- [x] `exchequer-tally-stick.png` - split notched wooden accounting stick; medieval debt ledger clue.
- [x] `rai-stone-money.png` - large carved stone disk money from Yap; money as social ledger clue.

### Batch B: Digital Culture

- [x] `eniac-vacuum-tube.png` - glowing glass vacuum tube with metal grid and filament.
- [x] `ibm-5150-pc.png` - beige early personal computer with monitor, keyboard, and floppy drives.
- [x] `wooden-computer-mouse.png` - Engelbart-style redwood mouse with single button and wheels.
- [x] `punch-card.png` - early computing punch card with rows of rectangular holes.

### Batch C: Philosophy

- [x] `diogenes-lantern.png` - rustic clay or bronze oil lamp associated with Diogenes.
- [x] `socrates-bust.png` - marble bust with bald head, broad face, and thoughtful expression.
- [x] `chak-pur-sand-mandala-tool.png` - Tibetan ridged metal funnel for sand mandalas.
- [x] `jade-bi-disc.png` - circular jade bi-style object used as a visual hook for balance and metaphysics.

### Batch D: Politics / Civics

- [x] `athenian-ostracon.png` - pottery shard ballot scratched with a citizen name.
- [x] `code-of-hammurabi-cartoon.png` - already covered in ancient artifacts.
- [x] `magna-carta-scroll.png` - parchment with seal; constitutional rights clue.
- [x] `roman-consular-fasces.png` - bundled rods and axe; Roman civic authority clue.
- [x] `ballot-box-voting-tokens.png` - ancient-style voting container with ceramic tokens.

### Batch E: Exam Prep

- [x] `imperial-exam-cheat-undershirt.png` - silk undershirt covered in tiny handwritten classics.
- [x] `sumerian-school-tablet.png` - teacher/student cuneiform practice tablet.
- [ ] `hornbook-primer.png` - paddle board with alphabet sheet under translucent horn.
- [x] `slate-writing-board.png` - reusable student slate and chalk pencil.
- [x] `abacus-counting-board.png` - bead-and-rod classroom arithmetic tool.

### Batch F: Practical Skills

- [x] `neolithic-hand-axe.png` - teardrop-shaped knapped flint tool.
- [x] `brass-marine-sextant.png` - brass navigation instrument with mirrors and arc.
- [x] `blacksmith-anvil.png` - iron anvil with flat face and horn.
- [x] `archimedes-screw-model.png` - water-lifting screw as practical engineering clue.

### Batch G: Arts / Music

- [x] `lyre-of-ur.png` - gold and lapis bull-headed lyre.
- [x] `divje-babe-flute.png` - cave bear femur flute fragment with holes.
- [x] `stradivarius-violin.png` - amber varnished violin.
- [ ] `venus-of-willendorf.png` - small Paleolithic limestone figurine.
- [x] `illuminated-manuscript-page.png` - gold-decorated medieval book-art page.

### Batch H: Geography / History

- [x] `rosetta-stone-cartoon.png` - already covered in ancient artifacts.
- [x] `tabula-rogeriana-map.png` - medieval world map on silver plate / manuscript style.
- [x] `sutton-hoo-helmet-cartoon.png` - already covered in ancient artifacts.
- [x] `portolan-chart.png` - compass-line nautical chart clue.
- [x] `mappa-mundi.png` - symbolic medieval world map clue.
- [x] `polynesian-stick-chart.png` - Pacific wave-and-island navigation chart clue.

### Batch I: Humanities

- [ ] `gutenberg-bible.png` - printed Gothic type volume.
- [x] `book-of-kells-page.png` - illuminated manuscript page with interlace and rich pigments.
- [x] `gilgamesh-tablet-cartoon.png` - already covered in ancient artifacts.
- [x] `terracotta-warrior-cartoon.png` - already covered in ancient artifacts.
- [x] `dead-sea-scroll-fragment.png` - parchment manuscript fragment in ancient-style script.
- [x] `shakespeare-first-folio.png` - early printed literary book artifact.
- [x] `bayeux-tapestry-fragment.png` - embroidered medieval historical narrative textile.

### Batch J: Maths

- [x] `ishango-bone.png` - carved tally bone with quartz point.
- [x] `plimpton-322-tablet.png` - cuneiform mathematical tablet.
- [x] `bronze-suanpan-abacus.png` - ornate ancient abacus with beads.
- [x] `quipu.png` - knotted cord accounting system.

### Batch K: Science

- [x] `antikythera-mechanism-cartoon.png` - already covered in ancient artifacts.
- [x] `islamic-astrolabe.png` - engraved brass astronomical instrument.
- [x] `galileo-telescope.png` - wood-and-leather early telescope.
- [x] `leeuwenhoek-microscope.png` - small brass single-lens microscope.
- [x] `mechanical-orrery.png` - geared tabletop solar-system model.

## Next Implementation Step

Batch A is now wired into the app as the first playable `Guess the Subject Artifact` set. Continue with Digital Culture or Philosophy next because both add new subject coverage without colliding much with existing ancient-artifact cards.

## Generated Sheets

- `business-finance/business-finance-artifacts-grid-v1.png`: generated 2x2 source sheet; quadrants are Lydian Lion Coin, VOC Share Certificate, Exchequer Tally Stick, and Rai Stone Money.
- `digital-culture/digital-culture-artifacts-grid-v1.png`: generated 2x2 source sheet; quadrants are ENIAC Vacuum Tube, IBM 5150 PC, Wooden Computer Mouse, and Punch Card.
- `philosophy/philosophy-artifacts-grid-v1.png`: generated 2x2 source sheet; quadrants are Diogenes' Lantern, Socrates Bust, Chak-pur Sand Mandala Tool, and Jade Bi Disc.
- `exam-prep/exam-prep-artifacts-grid-v1.png`: generated 2x2 source sheet; quadrants are Imperial Exam Cheat Undershirt, Sumerian School Tablet, Slate Writing Board, and Abacus Counting Board.
- `practical-skills/practical-skills-artifacts-grid-v1.png`: generated 2x2 source sheet; quadrants are Neolithic Hand Axe, Brass Marine Sextant, Blacksmith Anvil, and Archimedes Screw Model.
- `arts-music/arts-music-artifacts-grid-v1.png`: generated 2x2 source sheet; quadrants are Lyre of Ur, Divje Babe Flute, Stradivarius Violin, and Illuminated Manuscript Page.
- `geography-history/geography-history-artifacts-grid-v1.png`: generated 2x2 source sheet; quadrants are Tabula Rogeriana Map, Portolan Chart, Mappa Mundi, and Polynesian Stick Chart.
- `humanities/humanities-artifacts-grid-v1.png`: generated 2x2 source sheet; quadrants are Book of Kells Page, Dead Sea Scroll Fragment, Shakespeare First Folio, and Bayeux Tapestry Fragment.
- `maths/maths-artifacts-grid-v1.png`: generated 2x2 source sheet; quadrants are Ishango Bone, Plimpton 322 Tablet, Bronze Suanpan Abacus, and Quipu.
- `science/science-artifacts-grid-v1.png`: generated 2x2 source sheet; quadrants are Islamic Astrolabe, Galileo Telescope, Leeuwenhoek Microscope, and Mechanical Orrery.
- `politics-civics/politics-civics-artifacts-grid-v1.png`: generated 2x2 source sheet; quadrants are Athenian Ostracon, Magna Carta Scroll, Roman Consular Fasces, and Ballot Box with Voting Tokens.
