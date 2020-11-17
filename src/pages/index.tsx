import { Layout } from 'components/_layouts'
import { IndexTemplate } from 'components/templates'
import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'

export default function Index({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <Layout>
      <IndexTemplate recordMap={recordMap} />
    </Layout>
  )
}

export async function getStaticProps() {
  const notion = new NotionAPI({
    authToken: process.env.NOTION_TOKEN,
  })
  const recordMap = await notion.getPage(process.env.TOP_PAGE_ID)

  return {
    props: {
      recordMap,
    },
    revalidate: 1,
  }
}
