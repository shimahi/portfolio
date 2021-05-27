import { Layout } from 'components/layout'
import { getPortfolio } from 'lib'
import { WorksTemplate } from 'components/templates'

export default function Index({ content }: Portfolio) {
  return (
    <Layout>
      <WorksTemplate content={content} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await getPortfolio('works')

  return {
    props: {
      content: res.content,
    },
    revalidate: 1,
  }
}
