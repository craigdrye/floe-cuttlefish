import { makeQuestionBank } from './base'

const miss = (answer: string, why: string, hint: string): [string, string, string] => [answer, why, hint]

const q = (
  id: number,
  chapter: string,
  title: string,
  prompt: string,
  correct: string,
  wrong: [string, string, string][],
) => ({
  id,
  chapter,
  title,
  prompt,
  correct,
  wrong,
  lesson:
    'Coverage source: reviewed OpenTriviaQA science/technology astronomy rows. This is an authored Floe-native conversion item, not a direct raw import.',
  source: 'OpenTriviaQA/OER cosmology and astronomy coverage',
})

export const cosmologyAstronomyExamBatch2Questions = makeQuestionBank('University', [
  q(459001, 'Solar System', 'Pluto orbit', 'Pluto takes about 248 Earth years to:', 'Complete one orbit around the Sun', [
    miss('Rotate once on its axis', 'A day and an orbit are different motions.', '248 years is orbital period.'),
    miss('Travel from Earth to the Moon', 'That is not Pluto context.', 'Think revolution around the Sun.'),
    miss('Become a main-sequence star', 'Pluto is not a star.', 'It is a dwarf planet orbiting the Sun.'),
  ]),
  q(459002, 'Solar System', 'Solar system definition', 'A solar system is best described as:', 'A star and the objects gravitationally bound to it', [
    miss('Only Earth and its Moon', 'That is one planet-moon pair, not a whole solar system.', 'Use star-centered structure.'),
    miss('A galaxy cluster', 'A galaxy cluster is much larger scale.', 'A solar system is centered on a star.'),
    miss('Any group of unrelated rocks', 'Gravity and central star matter.', 'Bound objects orbit a star.'),
  ]),
  q(459003, 'Solar System', 'Mars name', 'Mars is named after the Roman god of:', 'War', [
    miss('The sea', 'Neptune is associated with the sea.', 'Mars has the war-god association.'),
    miss('Time', 'Saturn is associated with time/agriculture traditions.', 'Think red planet and war.'),
    miss('Messages', 'Mercury is associated with the messenger god.', 'Mars is the war god.'),
  ]),
  q(459004, 'Planetary Science', 'Mars evidence', 'Evidence of ancient water on Mars matters because water is:', 'A key condition considered in habitability studies', [
    miss('Proof that Mars is currently covered in oceans', 'Ancient water evidence does not imply modern oceans.', 'Habitability, not certainty.'),
    miss('Irrelevant to life chemistry', 'Water is central to life-as-we-know-it searches.', 'Follow the astrobiology clue.'),
    miss('A sign that Mars is a star', 'Planets can have water evidence.', 'Keep object type straight.'),
  ]),
  q(459005, 'Planetary Science', 'Venus elongation', 'Venus never appears far from the Sun in Earth sky because:', 'Its orbit lies inside Earth’s orbit', [
    miss('It orbits beyond Neptune', 'Venus is an inner planet.', 'Inner planets stay near the Sun visually.'),
    miss('It has no reflected sunlight', 'Venus is bright because it reflects sunlight.', 'The issue is orbital geometry.'),
    miss('It is outside the Solar System', 'Venus is a Solar System planet.', 'Think inner orbit.'),
  ]),
  q(459006, 'Moons', 'Charon and Pluto', 'Charon is unusual among moons because it is:', 'Large compared with Pluto, making the pair close to a double system', [
    miss('The Moon of Earth', 'Charon orbits Pluto.', 'Use the Pluto context.'),
    miss('A main-sequence star', 'Charon is not a star.', 'It is a moon/dwarf-planet companion.'),
    miss('Made only of liquid iron', 'That is not the defining feature here.', 'Relative size is the clue.'),
  ]),
  q(459007, 'Moons', 'Uranus moon Ariel', 'Ariel is a natural satellite of:', 'Uranus', [
    miss('Mercury', 'Mercury has no natural moons.', 'Ariel belongs to Uranus.'),
    miss('Venus', 'Venus has no natural moons.', 'Think Uranian moons.'),
    miss('Mars', 'Mars has Phobos and Deimos.', 'Ariel is not Martian.'),
  ]),
  q(459008, 'Moons', 'Moon phase visibility', 'The Moon is least visible from Earth near:', 'New moon', [
    miss('Full moon', 'A full moon is highly visible at night.', 'Least lit face toward Earth.'),
    miss('First quarter', 'A quarter moon is visible as a half disk.', 'New moon is darkest from Earth.'),
    miss('Waxing gibbous', 'That phase is mostly illuminated.', 'Think minimal illuminated face.'),
  ]),
  q(459009, 'Telescopes', 'Hubble limits', 'The Hubble Space Telescope is powerful, but it does not primarily observe in:', 'Radio wavelengths', [
    miss('Visible light', 'Hubble is famous for visible-light imaging.', 'Look for the wavelength it does not primarily cover.'),
    miss('Ultraviolet light', 'Hubble can observe ultraviolet.', 'Not the main excluded regime.'),
    miss('Near infrared light', 'Hubble has near-infrared capability.', 'Radio needs different telescope designs.'),
  ]),
  q(459010, 'Stars', 'Sun final stage', 'A Sun-like star is expected eventually to leave behind:', 'A white dwarf after a planetary-nebula phase', [
    miss('A black hole', 'The Sun is not massive enough for black-hole collapse.', 'Low/intermediate-mass star path.'),
    miss('A neutron star', 'That requires a more massive star and supernova.', 'The Sun ends more gently.'),
    miss('A new rocky planet only', 'Stellar evolution does not end as a planet.', 'Think white dwarf remnant.'),
  ]),
  q(459011, 'Stars', 'Sun color', 'The Sun can appear yellow from Earth mainly because:', 'Earth’s atmosphere scatters shorter blue wavelengths', [
    miss('The Sun emits only yellow light', 'The Sun emits a broad spectrum.', 'Atmospheric scattering affects appearance.'),
    miss('Space itself is painted yellow', 'No physical astronomy concept supports that.', 'Think light and atmosphere.'),
    miss('The Moon filters sunlight before it reaches us', 'Sunlight reaches Earth directly.', 'Atmospheric path matters.'),
  ]),
  q(459012, 'Stars', 'Solar corona', 'The corona is:', 'The Sun’s outer atmosphere', [
    miss('The Sun’s solid rocky surface', 'The Sun has no solid surface like Earth.', 'Corona is an outer layer.'),
    miss('A moon of Jupiter', 'Not in this context.', 'Solar layer.'),
    miss('The core of a comet', 'A comet nucleus is different.', 'Think Sun atmosphere.'),
  ]),
  q(459013, 'Stars', 'Stellar temperature', 'A star’s surface temperature is closely related to its:', 'Color and spectrum', [
    miss('Number of named moons', 'Stars do not have moons in that sense.', 'Temperature affects emitted light.'),
    miss('Postal address', 'No.', 'Use radiation and spectrum.'),
    miss('Calendar month of discovery only', 'Discovery date does not determine physical temperature.', 'Color-temperature relation.'),
  ]),
  q(459014, 'Galaxies', 'Galaxy definition', 'A galaxy is:', 'A large gravitationally bound system of stars, gas, dust, and dark matter', [
    miss('A single small asteroid', 'A galaxy contains enormous numbers of stars.', 'Much larger structure.'),
    miss('A weather pattern in Earth’s atmosphere', 'That is meteorology.', 'Galaxy-scale gravity.'),
    miss('One artificial satellite', 'Satellites are tiny by comparison.', 'Stars and dark matter.'),
  ]),
  q(459015, 'Distances', 'Astronomical unit', 'An astronomical unit is approximately:', 'The average Earth-Sun distance', [
    miss('The distance from Earth to the Moon', 'That is much smaller than an AU.', 'AU is Earth-Sun scale.'),
    miss('The diameter of Earth', 'That is far too small.', 'Think orbital distance.'),
    miss('The age of the universe', 'An AU is distance, not time.', 'Unit of length.'),
  ]),
  q(459016, 'Distances', 'Light time', 'Sunlight takes about how long to reach Earth?', 'About 8 minutes', [
    miss('Instantaneously', 'Light has a finite speed.', 'It takes minutes from the Sun.'),
    miss('About 8 years', 'That is far too long for Sun-Earth distance.', 'Years apply to stellar distances.'),
    miss('About 1 second', 'That is too short for one AU.', 'Use light travel time.'),
  ]),
  q(459017, 'Orbital Motion', 'Orbital period', 'A planet’s orbital period is the time it takes to:', 'Complete one revolution around its star', [
    miss('Spin once on its axis', 'That is rotation period/day length.', 'Orbit means revolution.'),
    miss('Reflect sunlight once', 'Reflection is continuous and not the period definition.', 'Track path around star.'),
    miss('Change chemical elements', 'Not orbital motion.', 'Motion through orbit.'),
  ]),
  q(459018, 'Orbital Motion', 'Inner planets', 'Mercury and Venus have no natural moons, unlike Earth and Mars. This is mainly a fact about their:', 'Satellite systems', [
    miss('Chemical formulas', 'Moon count is not a chemical formula.', 'Natural satellites.'),
    miss('Telescope mirror type', 'No.', 'The clue is moons.'),
    miss('Galaxy classification', 'These are planets, not galaxies.', 'Planetary satellites.'),
  ]),
  q(459019, 'Planetary Science', 'Jupiter atmosphere', 'Jupiter’s atmosphere is composed mostly of:', 'Hydrogen and helium', [
    miss('Oxygen and nitrogen', 'That is closer to Earth’s atmosphere.', 'Jupiter is a gas giant.'),
    miss('Carbon dioxide and sulfur dioxide', 'Not the bulk composition.', 'Think light elements.'),
    miss('Iron and nickel gas only', 'Those are not the dominant atmospheric gases.', 'Hydrogen dominates.'),
  ]),
  q(459020, 'Planetary Science', 'Neptune orbit', 'Neptune takes much longer than Earth to orbit the Sun because:', 'It is much farther from the Sun', [
    miss('It has no gravity at all', 'Neptune is massive and gravitationally bound.', 'Distance affects orbital period.'),
    miss('It is closer to the Sun than Mercury', 'Neptune is an outer planet.', 'Farther orbit, longer period.'),
    miss('It stops moving every winter', 'Planets continue orbiting.', 'Orbital radius matters.'),
  ]),
  q(459021, 'Planetary Science', 'Saturn rings', 'Saturn’s rings are made mostly of:', 'Ice particles with some rock and dust', [
    miss('Living trees', 'Rings are not biological forests.', 'Small particles orbit Saturn.'),
    miss('Liquid oceans flowing in circles', 'The rings are not continuous liquid oceans.', 'Particles and ice.'),
    miss('Only burning plasma', 'Saturn’s rings are cold particle systems.', 'Ice-rich rings.'),
  ]),
  q(459022, 'Planetary Science', 'Great Red Spot', 'Jupiter’s Great Red Spot is:', 'A long-lived storm system', [
    miss('A continent on a solid surface', 'Jupiter lacks a solid surface like Earth.', 'It is atmospheric.'),
    miss('A crater from Earth’s Moon', 'Wrong body and feature type.', 'Think gas giant storm.'),
    miss('A ring gap like Saturn’s Cassini Division', 'The Great Red Spot is not a ring structure.', 'It is a storm.'),
  ]),
  q(459023, 'Small Bodies', 'Comet tail', 'A comet can develop a tail when:', 'Solar heating releases gas and dust from its icy body', [
    miss('It becomes colder far from the Sun', 'Comet tails are driven by warming near the Sun.', 'Solar heating matters.'),
    miss('It turns into a galaxy', 'Comets remain small Solar System bodies.', 'Tail is gas and dust.'),
    miss('Earth’s oceans pull it apart', 'The Sun drives the common tail mechanism.', 'Ices sublimate near Sun.'),
  ]),
  q(459024, 'Small Bodies', 'Asteroids', 'Asteroids are generally:', 'Small rocky bodies orbiting the Sun', [
    miss('Clouds inside Earth’s troposphere', 'Asteroids are space objects.', 'Rocky Solar System bodies.'),
    miss('Living cells in the bloodstream', 'No biological context.', 'Astronomy object.'),
    miss('Only artificial satellites built by humans', 'Asteroids are natural objects.', 'Natural rocky bodies.'),
  ]),
  q(459025, 'Cosmology', 'Redshift meaning', 'When light from a distant galaxy is cosmologically redshifted, its wavelength has been:', 'Stretched toward longer wavelengths', [
    miss('Compressed toward shorter wavelengths', 'That would be blueshift.', 'Red means longer wavelength.'),
    miss('Changed into a sound wave', 'Light remains electromagnetic radiation.', 'Wavelength stretch.'),
    miss('Stopped entirely at the source', 'We observe the light arriving.', 'Expansion stretches it.'),
  ]),
  q(459026, 'Cosmology', 'Lookback time', 'Because light travels at a finite speed, observing very distant galaxies means observing them:', 'As they were in the past', [
    miss('Only as they will be in the future', 'The light left long ago.', 'Finite light speed gives lookback time.'),
    miss('With no time delay', 'There is always travel time.', 'Distance means delay.'),
    miss('Inside Earth’s atmosphere', 'Galaxies are far beyond the atmosphere.', 'The observation is cosmic.'),
  ]),
  q(459027, 'Cosmology', 'Cosmic expansion', 'Hubble’s law says more distant galaxies generally have greater:', 'Recession speeds', [
    miss('Human populations', 'Hubble’s law is about galaxies, not demographics.', 'Velocity-distance relation.'),
    miss('Ocean tides', 'Not the Hubble-law variable.', 'Galaxy recession.'),
    miss('Chemical acidity', 'No.', 'Expansion relationship.'),
  ]),
  q(459028, 'Cosmology', 'CMB evidence', 'The cosmic microwave background is important because it is:', 'Relic radiation from the early universe', [
    miss('Weather noise from one thunderstorm', 'The CMB is cosmic, not local weather.', 'Early-universe afterglow.'),
    miss('Sunlight reflected only by Pluto', 'It is not a Solar System reflection.', 'Cosmological radiation.'),
    miss('A type of asteroid belt', 'Radiation is not a belt of rocks.', 'Microwave background.'),
  ]),
  q(459029, 'Cosmology', 'Dark matter clue', 'Dark matter is inferred partly because:', 'Visible matter alone cannot explain observed gravitational effects', [
    miss('It shines brighter than every star', 'Dark matter does not emit ordinary light strongly.', 'Inferred by gravity.'),
    miss('It is just another name for sunlight', 'Sunlight is electromagnetic radiation, not dark matter.', 'Missing mass/gravity clue.'),
    miss('It only exists inside telescopes', 'It is inferred astrophysically, not manufactured by instruments.', 'Observed motion/lensing.'),
  ]),
  q(459030, 'Cosmology', 'Dark energy clue', 'Dark energy is used in cosmology to explain:', 'The accelerating expansion of the universe', [
    miss('Why planets have seasons', 'Seasons come from axial tilt and orbit.', 'Cosmic expansion acceleration.'),
    miss('Why rocks fall near Earth', 'Ordinary gravity explains that locally.', 'Universe-scale expansion.'),
    miss('How telescopes focus light', 'That is optics, not dark energy.', 'Expansion history.'),
  ]),
])
