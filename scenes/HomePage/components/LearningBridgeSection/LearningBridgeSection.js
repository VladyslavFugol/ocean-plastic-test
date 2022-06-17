import classNames from 'classnames'
import Image from 'next/image'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import { LearningBridgeIllustration } from './components/LearningBridgeIllustration'
import bgImage from '../../../../public/learning-bridge-image.jpg'
import styles from './LearningBridgeSection.module.scss'

function LearningBridgeSection() {
  return (
    <div className={styles.learning}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.image}>
          <Image width={1440} src={bgImage}/>
        </div>
        <div className={styles.content}>
          <Title className={styles.title}>
            <strong>Learning bridge</strong>
          </Title>
          <p>
            The plastics landscape is an information silo. Through action accelerators, interactive
            stakeholder education and media, OPLN serves as an interdependent learning bridge
            between The Global South & The Global North with a mission to inform balanced debates
            and inspire inclusive and effective collaboration.
          </p>
          <Button title='Our Media' outline='Black' className={styles.button}/>
          <Button title='Our Activations' outline='PrimeGreen'/>
        </div>
        <div className={styles.illustration}>
          <LearningBridgeIllustration/>
        </div>
      </div>
    </div>
  )
}

export default LearningBridgeSection
