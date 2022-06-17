import { LinkTo } from '@/components/LinkTo'
import styles from './News.module.scss'

function News({ tag, newsText, date }) {
  return (
    <LinkTo href='/'>
      <div className={styles.news}>
        <div className={styles.newsTag}>{`@${tag}`}</div>
        <div className={styles.newsText}>{newsText}</div>
        <div className={styles.newsDate}>{date}</div>
      </div>
    </LinkTo>
  )
}

export default News