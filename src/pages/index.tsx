import { useEffect } from 'react'
import { usePage } from 'contexts/pageContext'
import styles from 'assets/css/pages/index.module.css'
import Layout from 'components/Layout'
import Headline from 'components/Headline'
import shimahi from 'assets/images/shimahi.jpg'

export default () => {
  const [_, setPage] = usePage()
  useEffect(() => {
    setPage('index')
  }, [])

  return (
    <Layout>
      <section className={styles.index}>
        <div className={styles.index__portrait}>
          <img src={shimahi} alt='俺' />
        </div>
        <Headline>Shimahi</Headline>
        <p>
          同人作家、ギタリスト、フロントエンドエンジニア。 1994年12月16日生。
          <br />
          paroleiseという同人サークルをやっています。
          東方アレンジを中心にギターロックの作曲を行なっており、即売会やライブに出たりしています。
          <br />
          ボーカリスト兼デザイナーの
          <a href='https://twitter.com/mochiten_' target='_blank' rel='noopener'>
            @mochiten_
          </a>
          と一緒に活動しており、楽曲や同人誌やWebサービスの企画・制作をするのが好きです。
          <br />
        </p>
        <Headline>VIEW</Headline>
        <p>なんか書く</p>
        <Headline>SKILL</Headline>
        <p>
          書ける: TypeScript, React, Ruby, PHP
          <br />
          勉強中: GraphQL, Hasura, Firebase
          <br />
          興味: ReactNative, electron, WebGL
          <br />
          <br />
          React・Next.jsでJAMStackのサイト・アプリを堅牢に速く作るのが得意です。
          <br />
          SPAの開発だけでなく、Webpack下でES ModuleとAtomic
          Designを組み合わせて、既存の静的ホームページのJSやCSSの保守がしやすいように改修したり、初心者向けに説明したりできます。
          <br />
          最近はサーバレスが気になってて、GraphQLサーバをGUIで作れるHasuraを使ってなんかできないかと模索しています。
        </p>
        <Headline>CONTACT</Headline>
        <p>
          twitterのDMを解放しているのでお気軽にご連絡下さい。 →{' '}
          <a href='https://twitter.com/prlsmh' target='_blank' rel='noopener'>
            @prlsmh
          </a>
        </p>
      </section>
    </Layout>
  )
}
