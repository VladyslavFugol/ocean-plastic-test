import { useState } from 'react'
import classNames from 'classnames'
import { Controller } from 'react-scrollmagic'
import { Title } from '@/components/Title'
import { InputWithButton } from '@/components/InputWithButton'
import { Illustration } from './components/Illustration'
import { urlFor } from '../../../../utils/sanity'
import { isEmailValid } from '../../../../utils/validation/emailValidation'
import styles from './HeroSection.module.scss'

function HeroSection({ heroData }) {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!isEmailValid(email)) {
      setEmailError({ status: true, errorMessage: 'Invalid email address' })
    } else {
      setEmailError({})
      setEmail('')
    }
  }

  return (
    <div className={styles.hero}>
      <div id='lineTrigger' className={classNames(styles.container, 'container')}>
        <div className={styles.content}>
          <div className={styles.left}>
            <Title className={styles.title}>
              <strong>Ocean Plastics</strong> Newsletter
            </Title>
            <p>{heroData.subtitle}</p>
            <form onSubmit={handleSubmit}>
              <InputWithButton
                type='text'
                placeholder='Email'
                error={emailError}
                buttonTitle='Subscribe'
                onFocus={setEmailError}
                onChange={setEmail}
              />
            </form>
          </div>
          <Controller>
            <Illustration illustrationImage={urlFor(heroData.image)} />
          </Controller>
        </div>
      </div>
    </div>
  )
}

export default HeroSection