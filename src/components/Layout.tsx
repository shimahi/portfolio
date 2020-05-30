import Head from 'next/head'
import Menu from 'components/Menu'
import TitleSvg from 'components/TitleSvg'
import styles from 'assets/css/components/Layout.module.css'

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Meminus</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.layout}>
        <Menu />
        <section className={styles.layout__content}>
          <TitleSvg />
          {children}
          <footer>&copy;2020 paroleise.org All Rights Reserved.</footer>
        </section>
      </main>
      <div className={styles.borderBottom}></div>
    </>
  )
}
