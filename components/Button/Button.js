import classNames from 'classnames'
import styles from './Button.module.scss'

function Button({ children, title, backgroundColor, outline, className, disabled }) {
  return (
    <button
      className={classNames(styles.button, styles[backgroundColor], styles[`o${outline}`], className)}
      disabled={disabled}
    >
      <span>{title}</span>
      {children}
    </button>
  )
}

export default Button
