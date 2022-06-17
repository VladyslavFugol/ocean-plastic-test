import { Button } from '@/components/Button'
import styles from './InputWithButton.module.scss'

function InputWithButton({ type, placeholder, value, onChange, error, onFocus, buttonTitle }) {
  return (
    <>
      <label className={styles.label}>
        <input
          style={{color: error.status ? 'red' : ''}}
          type={type}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => onFocus({})}
        />
        <Button
          title={buttonTitle}
          className={styles.button}
          backgroundColor='PrimeGreen'
        />
      </label>
      {error.status && <div className={styles.error}>{error.errorMessage}</div>}
    </>
  )
}

export default InputWithButton;
