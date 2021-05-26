import { Layout } from 'components/layout'
import { getArticle } from 'lib/microcms'
import { WorksTemplate } from 'components/templates/Works'

export default function Index({ content }: { content: any }) {
  return (
    <Layout>
      <WorksTemplate content={content} />
    </Layout>
  )
}

export async function getStaticProps() {
  const article = await getArticle('works')

  return {
    props: {
      content: article.content,
    },
    revalidate: 1,
  }
}
