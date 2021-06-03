import aspida from '@aspida/fetch'
import api from 'aspida/$api'

import getConfig from 'next/config'

const {
  serverRuntimeConfig: { cmsKey },
} = getConfig()

const baseURL = 'https://shimahi.microcms.io/api/v1'
const config = { headers: { 'X-API-KEY': cmsKey } }

export const getPortfolio = async (id: string) => {
  const _fetch = api(aspida(fetch, { baseURL }))

  const res = await _fetch.portfolio._id(id).$get({ config })

  return res
}
