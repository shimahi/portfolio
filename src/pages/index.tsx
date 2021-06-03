import { Layout } from 'components/layout'
import { getPortfolio } from 'lib'
import { IndexTemplate } from 'components/templates'

export default function Index({ content }: Portfolio) {
  return (
    <Layout>
      <IndexTemplate content={content} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await getPortfolio('top')

  return {
    revalidate: 1,
    props: {
      content: res.content,
    },
  }
}
