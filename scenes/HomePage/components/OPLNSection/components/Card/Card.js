import { Scene } from 'react-scrollmagic'
import classNames from 'classnames'
import styles from './Card.module.scss'

function Card({ children, borderText, text, color, backgroundColor, size }) {
  return (
    <Scene classToggle={styles.active} reverse={false} triggerElement='#cardsTrigger'>
      <div
        className={classNames(styles.card, styles[backgroundColor], styles[size], styles[color])}
      >
        <div style={{ color }}>
        <span style={{ WebkitTextStroke: `2px ${color}`}}>
          {borderText}
        </span>
          {text}
          {children}
        </div>
      </div>
    </Scene>
  )
}

export default Card
