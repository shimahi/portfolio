import { Layout } from 'components/_layouts'
import { WorksTemplate } from 'components/templates'
import { PageProps } from 'types'
import { BlockMapType } from 'react-notion'

export default function Works({ blockMap }: PageProps) {
  return (
    <Layout>
      <WorksTemplate blockMap={blockMap} />
    </Layout>
  )
}

export async function getStaticProps() {
  const blockMap: BlockMapType = await fetch(`https://notion-api.splitbee.io/v1/page/${process.env.WORKS_PAGE_ID}`, {
    headers: { Authorization: `Bearer ${process.env.NOTION_TOKEN}` },
  }).then((res) => res.json())

  return {
    props: {
      blockMap,
    },
    revalidate: 1,
  }
}
