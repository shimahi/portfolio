import { useEffect } from 'react'
import { usePage } from 'contexts/pageContext'
import Head from 'next/head'
import styles from 'assets/css/pages/mine.module.css'
import Layout from 'components/Layout'

export default () => {
  const [_, setPage] = usePage()

  useEffect(() => {
    setPage('mine')
  }, [])

  return (
    <>
      <Layout>
        <Head>
          <title>Mine | Meminus</title>
        </Head>
        <section>工事中</section>
      </Layout>
    </>
  )
}
