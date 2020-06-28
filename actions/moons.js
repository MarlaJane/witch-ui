/* eslint-disable import/prefer-default-export */
import axios from 'axios'

/* export const fetchMoon = async (id) => {
  //  try {
  console.log('tests')
  const { data } = await axios.get(`${API_BASE_URL}/months/${id}`) // eslint-disable-line no-undef
  // console.log(data)
  return data
  // } catch (error) {
  //   return {}
  // }
} */

export const fetchMoon = async (name) => {
  const { data } = await axios.get(`${API_BASE_URL}/months/${name}`) // eslint-disable-line no-undef

  return data
}
