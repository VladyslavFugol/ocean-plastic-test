import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { Title } from '@/components/Title'
import { InputWithButton } from '@/components/InputWithButton'
import { Point } from './components/Point'
import { isEmailValid } from '../../../../utils/validation/emailValidation';
import globalPlasticsImage from '../../../../public/global-plastics-image.jpg'
import styles from './GlobalPlasticsSection.module.scss'

function GlobalPlasticsSection() {
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
    <div className={styles.global}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.content}>
          <div className={styles.columns}>
            <div className={styles.info}>
              <Title className={styles.infoTitle}>
                <strong>Global Plastics</strong> Treaty 101
              </Title>
              <p>
                Global Plastics Treaty 101 is OPLN’s primer on the UN Resolution to End Plastic
                Pollution, signed by the United Nations Environmental Assembly in <strong>March
                2022</strong>.
              </p>
              <div className={styles.infoImage}>
                <Image src={globalPlasticsImage}/>
              </div>
            </div>
            <div className={styles.form}>
              <div className={styles.formTitle}>
                What you will learn with a 10 min time investment:
              </div>
              <div className={styles.points}>
                <Point
                  text="key considerations of the ongoing plastic treatynegotiations"
                />
                <Point
                  text="insights into the process gained from differentstakeholder positions"
                />
                <Point text="expected timeline"/>
              </div>
              <div className={styles.formImage}>
                <Image src={globalPlasticsImage}/>
              </div>
              <p>
                Stakeholders seeking a quick introduction to “the most important climate deal since
                the Paris Agreement” can access it here.
              </p>
              <form onSubmit={handleSubmit}>
                <InputWithButton
                  type="text"
                  placeholder="Subscribe"
                  buttonTitle='Register'
                  value={email}
                  onChange={setEmail}
                  onFocus={setEmailError}
                  error={emailError}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalPlasticsSection;
