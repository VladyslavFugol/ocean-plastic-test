import { TickDone } from '@/assets/TickDone'
import styles from './Point.module.scss'

function Point({ children, text }) {
  return (
    <div className={styles.point}>
      <TickDone className={styles.pointTick}/>
      <div className={styles.pointText}>{text}</div>
      {children}
    </div>
  )
}

export default Point
