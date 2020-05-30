import { useEffect } from 'react'
import { usePage } from 'contexts/pageContext'
import Head from 'next/head'
import styles from 'assets/css/pages/us.module.css'
import Layout from 'components/Layout'
import SlideShow from 'components/SlideShow'
import Headline from 'components/Headline'
import Music from 'components/Music'
import Gallery from 'components/Gallery'
export default () => {
  const [_, setPage] = usePage()
  useEffect(() => {
    setPage('us')
  }, [])

  return (
    <>
      <Layout>
        <Head>
          <title>Us | Meminus</title>
        </Head>
        <section className={styles.us}>
          <SlideShow />
          <p className={styles.us__about}>
            paroleise(パロレズ)は、音楽・デザインを中心とした創作活動を行うサークルです。
          </p>
          <Headline>OVERVIEW</Headline>
          <p>
            2016年 福岡市博多区で結成。
            <br />
            しまひが作曲・録音、mochiがボーカル・デザインを行い制作したCDを同人誌即売で頒布する活動を基本とするほか、
            <br />
            他サークルとの合同楽曲制作、mochiによるタイポグラフィ(文字デザイン)同人誌の発行、音楽ライブ活動、Webサービスの企画・開発を続けている。
          </p>
          <Headline>MUSIC</Headline>
          <div className={styles.us__music}>
            <Music url='708638488' />
            <Music url='694690837' />
            <Music url='484984596' />
          </div>
          <Headline>GALLERY</Headline>
          <Gallery />
        </section>
      </Layout>
    </>
  )
}
