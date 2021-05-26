import { Layout } from 'components/layout'
import { client } from 'lib/microcms'
import { IndexTemplate } from 'components/templates'

export default function Index({ content }: { content: any }) {
  return (
    <Layout>
      <IndexTemplate content={content} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = (await client.get({
    endpoint: 'portfolio',
    contentId: 'top',
  })) as any // TODO: aspidaによって明示的に型付けする

  return {
    props: {
      content: res.content,
    },
    revalidate: 1,
  }
}
