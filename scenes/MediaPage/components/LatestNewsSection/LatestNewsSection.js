import { useRef } from 'react'
import Slider from 'react-slick'
import classNames from 'classnames'
import { NewsCard } from '@/components/NewsCard'
import { Title } from '@/components/Title'
import { LeftArrow } from '@/assets/LeftArrow'
import { RightArrow } from '@/assets/RightArrow'
import firstImage from '../../../../public/latest-news-image.png'
import secondImage from '../../../../public/gallery/Image2.jpg'
import thirtyImage from '../../../../public/gallery/Image1.jpg'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './LatestNewsSection.module.scss'

function LatestNewsSection() {
  const slider = useRef()

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true
  }

  return (
    <div className={styles.latest}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.content}>
          <Title className={styles.title}>
            <strong>Latest news</strong>
          </Title>
          <div className={styles.arrows}>
            <LeftArrow onClick={() => slider.current.slickPrev()} />
            <RightArrow onClick={() => slider.current.slickNext()} />
          </div>
        </div>
        <div className={styles.slider}>
          <Slider ref={slider} {...settings}>
            <div className={styles.sliderImage}>
              <NewsCard
                image={firstImage.src}
                tag='Henry Englert'
                newsText='Five Insights on ReShaping the European Plastic System'
                date='04.29.2022'
              />
            </div>
            <div className={styles.sliderImage}>
              <NewsCard
                image={secondImage.src}
                tag='Henry Englert'
                newsText='Five Insights on ReShaping the European Plastic System'
                date='04.29.2022'
              />
            </div>
            <div className={styles.sliderImage}>
              <NewsCard
                image={thirtyImage.src}
                tag='Henry Englert'
                newsText='Five Insights on ReShaping the European Plastic System'
                date='04.29.2022'
              />
            </div>
            <div className={styles.sliderImage}>
              <NewsCard
                image={firstImage.src}
                tag='Henry Englert'
                newsText='Five Insights on ReShaping the European Plastic System'
                date='04.29.2022'
              />
            </div>
            <div className={styles.sliderImage}>
              <NewsCard
                image={secondImage.src}
                tag='Henry Englert'
                newsText='Five Insights on ReShaping the European Plastic System'
                date='04.29.2022'
              />
            </div>
            <div className={styles.sliderImage}>
              <NewsCard
                image={thirtyImage.src}
                tag='Henry Englert'
                newsText='Five Insights on ReShaping the European Plastic System'
                date='04.29.2022'
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default LatestNewsSection