import { Scene } from 'react-scrollmagic'
import styles from './Illustration.module.scss'

function Illustration() {
  return (
    <>
      <Scene classToggle={styles.horizontalActive} triggerElement='#draw' reverse={false}>
        <svg className={styles.horizontal} version='1.1' id='Слой_1'
             xmlns='http://www.w3.org/2000/svg'
             xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
             viewBox='0 0 1516 421' enableBackground='new 0 0 1516 421' xmlSpace='preserve'>
          <path className={styles.horizontalLine} fill='none' stroke='#080808' strokeMiterlimit='10'
                d='M1514.7,126.6c-41.4-25.2-142.5-85.9-185.1-63.7
                c-23.8,12.4-50.8,74.5-64.5,58.2c-10.1-12.1-54.4-19.2-69.6,18.8c-15,37.3,62.6,35-15.3,85.2C1111,269.9,990.1,258,947,268.5
                c-38.2,9.3-14.1,62.1-86.1,47.5c-28.7-5.8-31.9-14.9-39.2-24.1c-17-21.2-95.6-12.5-135.3,13c-90.7,58.2-132.2,5-174.3-7.5
                c-39.9-11.8-49.8,33.3-96.6,33.3c-86.8,0-116.7-33-138.9-55c-87.7-86.8-76.4-53.2-103.8-76.1c-23.1-19.3,7.7-74.7-37.3-88.8
                c-39.4-12.3-80-3.8-107.8-12.9C7,91.2-3.6,68.2,4.1,47.9c3.2-8.5,8.4-16.5,14.4-23.4c44.1-50.5,97-5.9,65.9,16.7'
          />
        </svg>
      </Scene>
      <Scene classToggle={styles.verticalActive} triggerElement='#draw' reverse={false}>
        <svg className={styles.vertical} version='1.1' id='Слой_1'
             xmlns='http://www.w3.org/2000/svg'
             xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
             viewBox='0 0 429.53 415.06' enableBackground='new 0 0 429.53 415.06'
             xmlSpace='preserve'>
          <path className={styles.verticalLine} fill='none' stroke='#080808' strokeMiterlimit='10'
                d='M297.03,86.76L297.03,86.76 M87.01,369.09l0.01-0.01l0.01-0.02
                c9.9-21.8-53.7-35.8-35.9,17.9c22.2,67,143-10.4,206.8-52.8c36.5-22.1,57.6-41.1,66.2-80.5c7-32.1-33-52.2-51.7-39.2
                c-22.5,15.6,10.2,39.3,13.8,18.4c6.1-36.5-86.7-63.7-150.5-33.9c-45.1,21-69.8-25.2-48.8-71.6v-0.1c42.5-93.2,169.4-11.5,210-40.4
                l0.2-0.1c28.1-20,29.5-48.3,42.6-69.4c15.4-25,65.6,2.8,88.6,21.3' />
        </svg>
      </Scene>
    </>
  )
}

export default Illustration
