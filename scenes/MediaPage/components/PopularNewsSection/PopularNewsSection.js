import classNames from 'classnames'
import { Title } from '@/components/Title'
import { News } from './components/News'
import { ContactsCard } from './components/ContactsCard'
import { LinkTo } from '@/components/LinkTo'
import BigNewsCard from '@/components/BigNewsCard/BigNewsCard'
import bigImage from '../../../../public/latest-news-image.png'
import { IconLinkedin } from '@/assets/IconLinkedin'
import { IconTwitter } from '@/assets/IconTwitter'
import { IconEmail } from '@/assets/IconEmail'
import { urlFor } from '../../../../utils/sanity'
import styles from './PopularNewsSection.module.scss'

function PopularNewsSection({ popularNews }) {
  const renderNews = () => {
    return popularNews.map((news, index) => {
      const { author, title, date } = news

      if (index < 1) {
        return false
      }

      return (
        <News
          tag={author}
          newsText={title}
          date={date}
          key={title}
        />
      )
    })
  }

  // const { image, author, title, date } = popularNews[0]

  return (
    <div className={classNames(styles.container, 'container')}>
      <div className={styles.content}>
        <Title className={styles.title}>
          <strong>Featured News</strong>
        </Title>
        <BigNewsCard
          image={bigImage.src}
          tag='Henry'
          newsName='Five'
          date='04-29-2022'
        />
        <div className={styles.popular}>
          <Title className={styles.popularTitle}>
            <strong>Featured News</strong>
          </Title>
          <div className={styles.popularContainer}>
            {/*{renderNews()}*/}
            <News
              tag='Henry Englert'
              newsText='Five Insights on ReShaping the European Plastic System'
              date='04-29-2022'
              key='Five Insights on ReShaping the European Plastic System '
            />

          </div>
          <ContactsCard backgroundColor='LightGrey'>
            <span>Press inquiries</span>
            <LinkTo className={styles.email} href='mailto:press@opln.org'>
              <IconEmail />
              <span>press@opnl.org</span>
            </LinkTo>
          </ContactsCard>
          <ContactsCard backgroundColor='PrimeGreen' color='white'>
            <span>Check our socials</span>
            <div>
              <LinkTo
                target='_blank'
                href='https://twitter.com/o_p_l_n'
                className={styles.twitter}
              >
                <IconTwitter color='#FFF' width={30} />
              </LinkTo>
              <LinkTo
                target='_blank'
                href='https://www.linkedin.com/company/ocean-plastics-leadership-network/'
              >
                <IconLinkedin color='#FFF' width={26} />
              </LinkTo>
            </div>
          </ContactsCard>
        </div>
      </div>
    </div>
  )
}

export default PopularNewsSection