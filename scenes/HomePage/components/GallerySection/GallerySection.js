import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import classNames from 'classnames'
import CustomImage from './components/СustomImage/CustomImage'
import { Title } from '@/components/Title'
import { LeftArrow } from '@/assets/LeftArrow'
import { RightArrow } from '@/assets/RightArrow'
import { addZeroToNumber } from '../../../../utils/addZeroToNumber'
import { galleryImages } from '../../../../constants/gallery-images'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './GallerySection.module.scss'

function GallerySection() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [slideCount, setSlideCount] = useState(0)
  const slider = useRef()

  useEffect(() => {
    setSlideCount(addZeroToNumber(slider.current.innerSlider.state.slideCount))
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    beforeChange: (current, next) => setCurrentSlide(next + 1),
  }

  const renderGalleryImages = () => {
    return (galleryImages.map((image, index) => {
        if (index % 2 === 0) {
          return (
            <div className={styles.sliderImage} key={image.alt}>
              <CustomImage src={image.src} size='big' />
            </div>
          )
        }

        return (
          <div className={styles.sliderImage} key={image.alt}>
            <CustomImage src={image.src} size='small' />
          </div>
        )
      }
    ))
  }

  return (
    <div className={styles.gallery}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.content}>
          <Title>
            <strong>Check</strong> Our activities
          </Title>
          <div className={styles.arrows}>
            <LeftArrow onClick={() => slider.current.slickPrev()} />
            <RightArrow onClick={() => slider.current.slickNext()} />
          </div>
          <div className={styles.counter}>
            {addZeroToNumber(currentSlide)}/{slideCount}
          </div>
        </div>
        <div className={styles.slider}>
          <Slider ref={slider} {...settings}>
            {renderGalleryImages()}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default GallerySection
