import { HeroSection } from './components/HeroSection'
import { LogosTickerSection } from './components/LogosTickerSection'
import { FilledLettersSection } from './components/FilledLettersSection'
import { OPLNSection } from './components/OPLNSection'
import { GallerySection } from './components/GallerySection'
import { NeutralConveningsSection } from './components/NeutralConveningsSection'
import { TreatyInterventionSection } from './components/TreatyInterventionSection'
import { GlobalPlasticsSection } from './components/GlobalPlasticsSection'
import { FeedbackSection } from './components/FeedbackSection'
import { LearningBridgeSection } from './components/LearningBridgeSection'
import { LatestNewsSection } from './components/LatestNewsSection'
import { ChaosMapSection } from './components/ChaosMapSection'

function HomePage() {
  return (
    <div>
      <HeroSection/>
      <LogosTickerSection/>
      <ChaosMapSection/>
      <FilledLettersSection/>
      <OPLNSection/>
      <GallerySection/>
      <NeutralConveningsSection/>
      <TreatyInterventionSection/>
      <FeedbackSection/>
      <LearningBridgeSection/>
      <LatestNewsSection/>
      <GlobalPlasticsSection/>
    </div>
  )
}

export default HomePage
