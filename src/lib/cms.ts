import getConfig from 'next/config'

const {
  publicRuntimeConfig: { rootUrl },
} = getConfig()

export const getPortfolioContent = async (id: string) => {
  const res = await fetch(`${rootUrl}/api/${id}`)
  const data = await res.json()
  const { content } = data

  return content as Portfolio
}
