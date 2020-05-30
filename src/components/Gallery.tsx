import gar_1 from 'assets/images/gar_1.jpg'
import gar_2 from 'assets/images/gar_2.jpg'
import gar_3 from 'assets/images/gar_3.jpg'
import gar_4 from 'assets/images/gar_4.jpg'
import gar_5 from 'assets/images/gar_5.jpg'
import gar_6 from 'assets/images/gar_6.jpg'
import gar_7 from 'assets/images/gar_7.jpg'
import gar_8 from 'assets/images/gar_8.jpg'
import gar_9 from 'assets/images/gar_9.jpg'
import gar_10 from 'assets/images/gar_10.jpg'
import gar_11 from 'assets/images/gar_11.jpg'
import gar_12 from 'assets/images/gar_12.jpg'
import styles from 'assets/css/components/Gallery.module.css'
const images = [
  gar_1,
  gar_2,
  gar_3,
  gar_4,
  gar_5,
  gar_6,
  gar_7,
  gar_8,
  gar_9,
  gar_10,
  gar_11,
  gar_12,
]

// TODO: lightboxにしたい
export default () => (
  <ul className={styles.gallery}>
    {images.map((image, index) => (
      <li key={index}>
        <img src={image} />
      </li>
    ))}
  </ul>
)
