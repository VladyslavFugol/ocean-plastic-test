import Slider from 'react-slick'
import classNames from 'classnames'
import { Title } from '@/components/Title'
import { FeedbackCard } from './components/FeedbackCard'
import { feedbacks } from '../../../../constants/feedbacks'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './FeedbackSection.module.scss'

function FeedbackSection() {
  const settings = {
    appendDots: dots => <ul>{dots}</ul>,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: styles.active,
    arrows: false,
  }

  const renderFeedbacks = () => {
    return feedbacks.map(feedback => (
      <div key={feedback.name}>
        <FeedbackCard
          userName={feedback.name}
          userInfo={feedback.info}
          photo={feedback.src}
        >
          {feedback.description}
        </FeedbackCard>
      </div>
    ))
  }

  return (
    <div className={styles.feedback}>
      <div className={classNames(styles.container, 'container')}>
        <Title className={styles.title}>
          <strong>What stakeholders</strong>say about us
        </Title>
        <div className={styles.slider}>
          <Slider {...settings}>
            {renderFeedbacks()}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default FeedbackSection
