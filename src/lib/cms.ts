import getConfig from 'next/config'
import aspida from '@aspida/fetch'
import api from 'aspida/$api'

const {
  publicRuntimeConfig: { apiUrl },
  serverRuntimeConfig: { cmsKey },
} = getConfig()

export const baseURL = apiUrl
export const config = { headers: { 'X-API-KEY': cmsKey } }

export const fetchPortfolio = async () => {
  const _fetch = api(aspida(fetch, { baseURL }))

  const top = await _fetch.portfolio._id('top').$get({ config })
  const works = await _fetch.portfolio._id('works').$get({ config })

  return { top, works }
}
