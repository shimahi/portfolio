import { Layout } from 'components/_layouts'
import { WorksTemplate } from 'components/templates'
import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'

export default function Works({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <Layout>
      <WorksTemplate recordMap={recordMap} />
    </Layout>
  )
}

export async function getStaticProps() {
  const notion = new NotionAPI({
    authToken: process.env.NOTION_TOKEN,
  })
  const recordMap = await notion.getPage(process.env.WORKS_PAGE_ID)

  return {
    props: {
      recordMap,
    },
    revalidate: 1,
  }
}
