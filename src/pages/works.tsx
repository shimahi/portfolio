import { Layout } from 'components/layout'
import { fetchPortfolio } from 'lib'
import { WorksTemplate } from 'components/templates'

export default function Index({ content }: Portfolio) {
  return (
    <Layout>
      <WorksTemplate content={content} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const { content } = await fetchPortfolio('works')

  return {
    props: {
      content,
    },
  }
}
