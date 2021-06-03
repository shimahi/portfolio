import { useEffect } from 'react'
import { useCms } from 'context/cmsContext'
import { Layout } from 'components/layout'
import { IndexTemplate } from 'components/templates'
import { fetchPortfolio } from 'lib'

type Props = {
  data: {
    top: Portfolio
    works: Portfolio
  }
}

export default function Index({ data }: Props) {
  const [cms, setCms] = useCms()

  useEffect(() => {
    if (data) {
      setCms(data)
    }
  }, [data, setCms])

  return <Layout>{cms.top && <IndexTemplate content={cms.top.content} />}</Layout>
}

export async function getStaticProps() {
  const data = await fetchPortfolio()

  return {
    props: {
      data,
    },
  }
}
