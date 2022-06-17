import classNames from 'classnames'
import styles from './ContactsCard.module.scss'

function ContactsCard({ children, backgroundColor, color }) {
  return (
    <div className={classNames(styles.card, styles[backgroundColor], styles[color])}>
      {children}
    </div>
  )
}

export default ContactsCard