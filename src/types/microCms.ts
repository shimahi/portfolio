type PortfolioContent = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  title: string
  content: string
}

export type Portfolio = {
  totalCount: number
  offset: number
  limit: number
  contents: PortfolioContent[]
}
