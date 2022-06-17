import classNames from 'classnames'
import Image from 'next/image'
import { Title } from '@/components/Title'
import { Button } from '@/components/Button'
import earth from '../../../../public/earth.png'
import styles from './TreatyIntervention.module.scss'

function TreatyInterventionSection() {
  return (
    <div className={styles.treaty}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.content}>
          <div>
            <Title className={styles.title}>
              <strong>Treaty & Intervention</strong> Stakeholder Engagement
            </Title>
            <p>
              Stakeholders throughout the value chain and beyond have trouble understanding - <strong> let alone
              participating
              in - UN treaties and processes</strong>. The OPLN is bringing activist-to-industry stakeholders together
              to build
              capacity for collaboration and deepen the understanding of each other's positions to accelerate progress
              on action plans.
            </p>
            <p>
              With our global presence and a recurrent convening format we measure stakeholder sentiment to inform
              inclusive and effective implementation of treaties, interventions and solutions.
            </p>
            <Button
              className={styles.button}
              title='Explore Global Plastics Treaty Series'
              backgroundColor='PrimeGreen'
            />
          </div>
          <div className={styles.image}>
            <Image src={earth}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TreatyInterventionSection
