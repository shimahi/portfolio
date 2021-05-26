const url = 'https://shimahi.microcms.io/api/v1/portfolio'
const config = { headers: { 'X-API-KEY': process.env.MICROCMS_API_KEY } }

export const getArticle = async (id: string) => {
  const res = await fetch(`${url}/${id}`, config)

  const body = await res.json()

  return body
}
