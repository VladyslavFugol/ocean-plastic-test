import classNames from 'classnames'
import { Title } from '@/components/Title'
import { ChaosMapIllustration } from './components/ChaosMapIllustration'
import { ChaosMapDescription } from './components/ChaosMapDescription'
import styles from './ChaosMap.module.scss'

function ChaosMapSection() {
  return (
    <div className={styles.chaos}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.content}>
          <div className={styles.chaosHeader}>
            <Title className={styles.title}>
              <strong>The Plastics Landscape is</strong> complex and chaotic
            </Title>
            <ChaosMapDescription/>
          </div>
          <div className={styles.illustration}>
            <ChaosMapIllustration />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChaosMapSection;
