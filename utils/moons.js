import { fetchMoon } from '../actions/moons'

export const getMonthIdFromUrl = location => (location && location.pathname
  ? location.pathname.split('/months/').pop()
  : ''
)
export const retrieveMonthMoons = async (location) => {
  const monthId = getMonthIdFromUrl(location)

  if (!monthId) return { id: 0, details: {}, Moons: [] }

  const { id, name, affirmation, Moons } = await fetchMoon(monthId)

  if (!id || !name || !affirmation || !Moons) return { id: 0, details: {}, Moons: [] }

  return { id, Moons, details: { id, name, affirmation } }
}
