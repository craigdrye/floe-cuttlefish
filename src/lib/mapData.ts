export const mapScenery = ['Dock', 'Swamp', 'Rain desk', 'Lagoon'] as const

export const mapLocationOptions: Record<(typeof mapScenery)[number], string[]> = {
  Dock: [
    '/assets/map-locations/transparent/sheet1-06.png',
    '/assets/map-locations/transparent/sheet2-05.png',
    '/assets/map-locations/transparent/sheet2-08.png',
  ],
  Swamp: [
    '/assets/map-locations/transparent/sheet1-07.png',
    '/assets/map-locations/transparent/sheet2-06.png',
    '/assets/map-locations/transparent/sheet2-07.png',
  ],
  'Rain desk': [
    '/assets/map-locations/transparent/sheet1-08.png',
    '/assets/map-locations/transparent/sheet2-02.png',
    '/assets/map-locations/transparent/sheet2-03.png',
  ],
  Lagoon: [
    '/assets/map-locations/transparent/sheet1-09.png',
    '/assets/map-locations/transparent/sheet2-01.png',
    '/assets/map-locations/transparent/sheet2-04.png',
  ],
}

export function generateTodayMapLocations() {
  return mapScenery.map((place) => {
    const options = mapLocationOptions[place]
    return options[Math.floor(Math.random() * options.length)]
  })
}
