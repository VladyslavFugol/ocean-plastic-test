import { LinkTo } from '@/components/LinkTo'
import bigImage from '../../public/latest-news-image.png'
import styles from './NewsCard.module.scss'

function NewsCard({ tag, newsText, date }) {
  return (
    <div className={styles.card}>
      <img src={bigImage.src} className={styles.cardImage}/>
      <LinkTo href='/' className={styles.cardTag}>{`@${tag}`}</LinkTo>
      <p className={styles.cardText}>{newsText}</p>
      <span className={styles.cardDate}>04.29.2022</span>
    </div>
  )
}

export default NewsCard
