import Link from 'next/link'
import styles from 'assets/css/components/Menu.module.css'
import { usePage } from 'contexts/pageContext'

export default () => {
  const [page] = usePage()

  return (
    <nav className={styles.menu}>
      <Link href='/'>
        <a className={page === 'index' ? styles.current : ''}>me</a>
      </Link>
      <Link href='/mine'>
        <a className={page === 'mine' ? styles.current : ''}>mine</a>
      </Link>
      <Link href='/us'>
        <a className={page === 'us' ? styles.current : ''}>us</a>
      </Link>
      <span className={styles.menu__title}>Shimahi portfolio</span>
    </nav>
  )
}
