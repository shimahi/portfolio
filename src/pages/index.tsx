import { Layout } from 'components/layout'
import { getArticle } from 'lib/microcms'
import { IndexTemplate } from 'components/templates'

export default function Index({ content }: { content: any }) {
  return (
    <Layout>
      <IndexTemplate content={content} />{' '}
    </Layout>
  )
}

export async function getStaticProps() {
  const article = await getArticle('top')

  return {
    props: {
      content: article.content,
    },
    revalidate: 1,
  }
}
