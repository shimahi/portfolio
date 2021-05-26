import { Layout } from 'components/layout'
import { client } from 'lib/microcms'
import { WorksTemplate } from 'components/templates/Works'

export default function Index({ content }: { content: any }) {
  return (
    <Layout>
      <WorksTemplate content={content} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = (await client.get({
    endpoint: 'portfolio',
    contentId: 'works',
  })) as any

  return {
    props: {
      content: res.content,
    },
    revalidate: 1,
  }
}
