import fetchMonths from '../actions/months'

export const filterMonths = (list, term) => list.filter(months => (
  // console.log('list.filter: ', list.filter);
  // console.log(': ', );
  months.name.toLowerCase().includes(term.toLowerCase())
))

export const retrieveMonths = async () => {
  const months = await fetchMonths()

  return months
}
