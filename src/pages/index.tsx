import { useState, useEffect } from 'react'
import { Layout } from 'components/layout'
import { getPortfolio } from 'lib'
import { IndexTemplate } from 'components/templates'

export default function Index({ content: initialContent }: Portfolio) {
  const [content, setContent] = useState(initialContent)

  useEffect(() => {
    if (!content) {
      getPortfolio('top').then((res) => {
        setContent(res.content)
      })
    }
  }, [content])

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
