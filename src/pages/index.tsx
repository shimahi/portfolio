import { Layout } from 'components/layout'
import { IndexTemplate } from 'components/templates'
import { fetchPortfolio } from 'lib'

export default function Index({ content }: Portfolio) {
  return (
    <Layout>
      <IndexTemplate content={content} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const { content } = await fetchPortfolio('top')

  return {
    props: {
      content,
    },
  }
}
