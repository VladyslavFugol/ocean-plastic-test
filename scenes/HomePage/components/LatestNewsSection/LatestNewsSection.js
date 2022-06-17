import classNames from 'classnames'
import { Title } from '@/components/Title'
import { NewsCard } from '@/components/NewsCard'
import SmallNewsCard from './components/SmallNewsCard/SmallNewsCard'
import firstNewsImage from '../../../../public/latest-news-first-image.png'
import secondNewsImage from '../../../../public/latest-news-second-image.png'
import styles from './LatestNewsSection.module.scss'

function LatestNewsSection() {
  return (
    <div className={styles.latest}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.content}>
          <Title className={styles.title}>
            <strong>Latest news</strong>
          </Title>
          <NewsCard
            size='Big'
            tag='Henry Englert'
            newsName='The Story Behind “The Giant Plastic Tap” at UNEA 5.2'
          />
          <div className={styles.news}>
            <Title className={styles.newsTitle}>
              <strong>Latest News</strong>
            </Title>
            <SmallNewsCard
              position='first'
              image={firstNewsImage}
              newsText='Marking One Year of Plastic Treaty Dialogues'
            />
            <SmallNewsCard
              image={secondNewsImage}
              newsText='Five Insights on ReShaping the European Plastic System'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNewsSection
