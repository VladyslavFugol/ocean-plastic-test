import { Button } from '@/components/Button'
import { Wave } from '../Wave'
import styles from './HeroSection.module.scss'

function HeroSection() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Bringing all sides <br/>
        of the plastics <br/>
        crisis to the table
      </h1>
      <div className={styles.content}>
        <p>
          Connecting 400+ activist-to-industry <br/>
          organizations worldwide on behalf of the <br/>
          ocean plastics crisis.
          <strong>Your organization <br/> can be a part of the solution.</strong>
        </p>
        <Button title='Become a member'/>
      </div>
      <Wave/>
    </div>
  )
}

export default HeroSection
