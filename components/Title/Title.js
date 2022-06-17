import classNames from 'classnames'
import styles from './Title.module.scss'

function Title({ children, className }) {
  return (
    <h2 className={classNames(styles.title, className)}>
      {children}
    </h2>
  )
}

export default Title
