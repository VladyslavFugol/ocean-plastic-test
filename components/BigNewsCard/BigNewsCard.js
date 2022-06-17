import { LinkTo } from '@/components/LinkTo'
import { RightArrow } from '@/assets/RightArrow'
import styles from './BigNewsCard.module.scss'

function BigNewsCard({ tag, newsName, date, image }) {
  return (
    <LinkTo href='/'>
      <div className={styles.card}>
        <img src={image}/>
        <span className={styles.cardTag}>{`@${tag}`}</span>
        <div className={styles.cardLink}>
         <div className={styles.test}>
           <span className={styles.cardText}>{newsName}</span>
           <RightArrow color='#FFF' className={styles.cardArrow} />
         </div>
          <span className={styles.cardDate}>{date}</span>
        </div>
      </div>
    </LinkTo>
  )
}

export default BigNewsCard