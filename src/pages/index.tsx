import { Layout } from 'components/_layouts'
import { IndexTemplate } from 'components/templates'
import { PageProps } from 'types'

export default function Index({ blockMap }: PageProps) {
  return (
    <Layout>
      <IndexTemplate blockMap={blockMap} />
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps() {
  const blockMap = await fetch(`https://notion-api.splitbee.io/v1/page/${process.env.TOP_PAGE_ID}`, {
    headers: { Authorization: `Bearer ${process.env.NOTION_TOKEN}` },
  }).then((res) => res.json())

  return {
    props: {
      blockMap,
    },
    revalidate: 60,
  }
}
