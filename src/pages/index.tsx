import { Layout } from 'components/layout'
import { IndexTemplate } from 'components/templates'
import { getPortfolioContent } from 'lib'

export default function Index({ content }: Portfolio) {
  return (
    <Layout>
      <IndexTemplate content={content} />
    </Layout>
  )
}

export async function getStaticProps() {
  const content = await getPortfolioContent('top')

  return {
    revalidate: 1,
    props: {
      content,
    },
  }
}
