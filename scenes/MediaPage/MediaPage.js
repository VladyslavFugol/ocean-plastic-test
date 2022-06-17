import HeroSection from './components/HeroSection/HeroSection'
import { PopularNewsSection } from './components/PopularNewsSection'
import { LatestNewsSection } from './components/LatestNewsSection'
import { GlobalPlasticsSection } from '../HomePage/components/GlobalPlasticsSection';

function MediaPage(props) {
  const { mediaData, popularNews } = props

  return (
    <div>
      <HeroSection heroData={mediaData[0].hero}/>
      <PopularNewsSection popularNews={popularNews}/>
      <LatestNewsSection/>
      <GlobalPlasticsSection/>
    </div>
  )
}

export default MediaPage