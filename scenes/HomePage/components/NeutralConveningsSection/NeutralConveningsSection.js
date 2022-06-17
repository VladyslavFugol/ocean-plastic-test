import Image from 'next/image'
import classNames from 'classnames'
import { Controller } from 'react-scrollmagic'
import { Illustration } from './components/Illustration'
import { Title } from '@/components/Title'
import firstImage from '../../../../public/neutral-convension-photo1.png'
import secondImage from '../../../../public/neutral-convension-photo2.png'
import thirtyImage from '../../../../public/neutral-convension-photo3.png'
import styles from './NeutralConvenings.module.scss'

function NeutralConveningsSection() {
  return (
    <div className={styles.neutral}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.content} id='draw'>
          <Title>
            <strong>Neutral Convenings</strong> & Expeditions
          </Title>
          <p>The OPLN is pro-urgency and pro-engagement for all stakeholders, from local to global.
            Through our neutral
            and immersive convenings and expeditions, stakeholders witness the plastic pollution
            crisis first hand and
            engage in boundary pushing programs designed to inform and accelerate collaboration.
          </p>
        </div>
        <div className={styles.photos}>
          <div className={styles.photosFirst}>
            <Image src={firstImage}/>
          </div>
          <div className={styles.photosSecond}>
            <Image src={secondImage}/>
          </div>
          <div className={styles.photosThirty}>
            <Image src={thirtyImage}/>
          </div>
          <Controller>
            <Illustration/>
          </Controller>
        </div>
      </div>
    </div>
  )
}

export default NeutralConveningsSection
