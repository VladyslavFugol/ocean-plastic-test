import classNames from 'classnames'
import { Title } from '@/components/Title'
import styles from './OtherNewsSection.module.scss'
import { NewsCard } from '@/components/NewsCard'

function OtherNewsSection() {
  return (
    <div className={classNames(styles.container, 'container')}>
      <Title>
        <strong>Other news</strong>
      </Title>
      <div className={styles.content}>
        <NewsCard className={styles.card} tag='Henry' newsText='Lorem ipsum' date='04-29-2022'/>
        <NewsCard className={styles.card} tag='Henry' newsText='Lorem ipsum' date='04-29-2022'/>
        <NewsCard className={styles.card} tag='Henry' newsText='Lorem ipsum' date='04-29-2022'/>
        <NewsCard className={styles.card} tag='Henry' newsText='Lorem ipsum' date='04-29-2022'/>
        <NewsCard className={styles.card} tag='Henry' newsText='Lorem ipsum' date='04-29-2022'/>

      </div>
    </div>
  )
}

export default OtherNewsSection