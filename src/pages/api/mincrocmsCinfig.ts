import getConfig from 'next/config'
import aspida from '@aspida/fetch'
import api from 'aspida/$api'

const {
  publicRuntimeConfig: { apiUrl },
  serverRuntimeConfig: { cmsKey },
} = getConfig()

export const baseURL = apiUrl
export const config = { headers: { 'X-API-KEY': cmsKey } }

export const fetchPortfolio = async (id: string) => {
  const _fetch = api(aspida(fetch, { baseURL }))

  const res = await _fetch.portfolio._id(id).$get({ config })

  return res
}
