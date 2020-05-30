import logo from 'assets/images/paroleise_logo.svg'
import bg_1 from 'assets/images/us_background_1.jpg'
import bg_2 from 'assets/images/us_background_2.jpg'
import bg_3 from 'assets/images/us_background_3.jpg'
import bg_4 from 'assets/images/us_background_4.jpg'
import bg_5 from 'assets/images/us_background_5.jpg'
import bg_6 from 'assets/images/us_background_6.jpg'
import styles from 'assets/css/components/SlideShow.module.css'

export default () => {
  const bgArray = [bg_1, bg_2, bg_3, bg_4, bg_5, bg_6]

  return (
    <div className={styles.slideshow}>
      {bgArray.map((bg: string, index) => (
        <img src={bg} key={index} />
      ))}
      <div className={styles.logo}>
        <img src={logo} alt='paroleise' />
      </div>
    </div>
  )
}
