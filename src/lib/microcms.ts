import aspida from '@aspida/fetch'
import api from 'aspida/$api'

const baseURL = 'https://shimahi.microcms.io/api/v1'
const config = { headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY } }

export const getPortfolio = async (id: string) => {
  const _fetch = api(aspida(fetch, { baseURL }))

  const res = await _fetch.portfolio._id(id).$get({ config })

  return res
}
