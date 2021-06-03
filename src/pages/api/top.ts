import { NextApiRequest, NextApiResponse } from 'next'
import { fetchPortfolio } from './mincrocmsCinfig'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const portfolio = await fetchPortfolio('top')
  res.status(200).json(portfolio)
}
