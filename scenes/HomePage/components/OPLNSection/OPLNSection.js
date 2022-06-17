import { Controller } from 'react-scrollmagic'
import classNames from 'classnames'
import { Title } from '@/components/Title'
import { Card } from './components/Card'
import styles from './OPLNSection.module.scss'

function OPLNSection() {
  return (
    <div className={styles.opln}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.content}>
          <div className={styles.text}>
            <Title>
              <strong>OPLN is a stakeholder</strong> learning bridge
            </Title>
            <div className={styles.description}>
              <p>
                together voices across <strong>industry</strong>, <strong>activism</strong>,
                and <strong>government</strong> to drive engagement on effective treaties and
                interventions concerning the global plastic pollution crisis.
              </p>
              <p>
                Through neutral and inclusive convenings, expeditions, development tracks, treaty
                dialogues, and
                stakeholder education we bridge divides, measure sentiment, and accelerate
                collaboration.
              </p>
            </div>
          </div>
          <div className={styles.cards} id='cardsTrigger'>
            <Controller>
              <Card
                classes={styles.active}
                backgroundColor='black'
                size='bigSize'
                text='organizations'
                borderText='400+'
              />
              <Card
                size='smallSize'
                backgroundColor='cappuccino'
                color='#080808'
                text='activations'
                borderText='79'
              />
              <Card
                size='smallSize'
                backgroundColor='primeGreen'
                text='countries'
                borderText='07'
              />
          </Controller>
        </div>
      </div>
    </div>
</div>
)
}

export default OPLNSection
