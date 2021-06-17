import { useEffect } from 'react'
import { useCms } from 'context/cmsContext'
import { Layout } from 'components/layout'
import { fetchPortfolio } from 'lib'
import { WorksTemplate } from 'components/templates'

type Props = {
  data: {
    top: Portfolio
    works: Portfolio
  }
}

export default function Works({ data }: Props) {
  const [cms, setCms] = useCms()

  useEffect(() => {
    if (data) {
      setCms(data)
    }
  }, [data, setCms])

  return <Layout>{cms.works && <WorksTemplate content={cms.works.content} />}</Layout>
}

export async function getStaticProps() {
  const data = await fetchPortfolio()

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}
