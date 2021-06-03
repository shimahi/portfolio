import { Layout } from 'components/layout'
import { getPortfolioContent } from 'lib'
import { WorksTemplate } from 'components/templates'

export default function Index({ content }: Portfolio) {
  return (
    <Layout>
      <WorksTemplate content={content} />
    </Layout>
  )
}

export async function getStaticProps() {
  const content = await getPortfolioContent('works')

  return {
    revalidate: 1,
    props: {
      content,
    },
  }
}
