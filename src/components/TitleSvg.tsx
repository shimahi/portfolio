import { usePage } from 'contexts/pageContext'
import styles from 'assets/css/components/TitleSvg.module.css'
import me from 'assets/images/me.svg'
import mine from 'assets/images/mine.svg'
import us from 'assets/images/us.svg'

export default () => {
  const [page] = usePage()
  let img, cName
  switch (page) {
    case 'index':
      img = me
      cName = styles.index
      break
    case 'mine':
      img = mine
      cName = styles.mine
      break
    case 'us':
      img = us
      cName = styles.us
      break
  }
  return (
    <div className={styles.titleSvg}>
      <div className={`${styles.titleSvg__item} ${cName}`}>
        <img src={img} alt='' />
      </div>
    </div>
  )
}
