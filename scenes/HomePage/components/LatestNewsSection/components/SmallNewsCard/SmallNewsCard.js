import classNames from 'classnames'
import Image from 'next/image'
import { RightArrow } from '@/assets/RightArrow'
import styles from './SmallNewsCard.module.scss'

function SmallNewsCard({ newsText, image, position }) {
  return (
    <div className={classNames(styles.card, styles[position])}>
      <div className={styles.cardContent}>
        <div className={styles.cardText}>{newsText}</div>
        <div className={styles.cardLink}>
          <span>Learn more</span>
          <RightArrow/>
        </div>
      </div>
      <div className={styles.cardImage}>
        <Image src={image} />
      </div>
    </div>
  )
}

export default SmallNewsCard;
