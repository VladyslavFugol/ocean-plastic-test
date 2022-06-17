import { Controller, Scene } from 'react-scrollmagic'
import Image from "next/image"
import classNames from 'classnames'
import bgImage from '../../../../public/filled-letters-image.jpg'
import styles from './FilledLettersSection.module.scss'

function FilledLettersSection() {
  return (
    <div className={styles.filled} id='trigger'>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.title}>
          <Controller>
          <Scene classToggle={styles.activeFirst} reverse={false} triggerElement='#trigger'>
            <p id='firstText' className={styles.text}>THE STAKEHOLDERS NEED TO COLLABORATE</p>
          </Scene>
          <Scene classToggle={styles.activeSecond} reverse={false} triggerElement='#trigger'>
            <p id='secondText' className={styles.text}>FASTER, LOCALLY, AND AT SCALE</p>
          </Scene>
          <Scene classToggle={styles.activeThirty} reverse={false} triggerElement='#trigger'>
            <p className={styles.text}>TO TURN THE TIDE ON PLASTIC POLLUTION</p>
          </Scene>
        </Controller>
        </div>
        <Image width={1440} src={bgImage}/>
      </div>
    </div>
  )
}

export default FilledLettersSection;
