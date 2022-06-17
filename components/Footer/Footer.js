import classNames from 'classnames'
import { LinkTo } from '@/components/LinkTo'
import { Logo } from '@/assets/Logo'
import { social } from '../../constants/social'
import { links } from '../../constants/links'
import styles from './Footer.module.scss'

function Footer() {
  const renderLinks = () => {
    return (
      <>
        {links.map(({ value, href }) => (
          <li key={value}>
            <LinkTo href={href}>{value}</LinkTo>
          </li>
        ))}
      </>
    )
  }

  const renderSocial = () => {
    return (
      <>
        {social.map(({ name, icon }) => (
          <li key={name}>
            <LinkTo href='/' target='_blank'>
              <div className={styles.link}>
                {icon}
                <span>{name}</span>
              </div>
            </LinkTo>
          </li>
        ))}
      </>
    )
  }

  return (
    <footer className={styles.footer}>
      <div className={classNames(styles.container, 'container')}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div>
          <div className={styles.lists}>
            <ul className={styles.list}>
              {renderLinks()}
            </ul>
            <div className={styles.twoLists}>
              <div className={styles.social}>
                <span>Social media</span>
                <ul className={classNames(styles.listSocial, styles.list)}>
                  {renderSocial()}
                </ul>
              </div>
              <div className={styles.contact}>
                <span className={styles.contactTitle}>Contact</span>
                <ul className={classNames(styles.listContact, styles.list)}>
                  <li>
                    <LinkTo href='tel:844-768-5283'>844-768-5283</LinkTo>
                  </li>
                  <li>
                    <LinkTo href='mailto:info@opln.org'>info@opln.org</LinkTo>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span className={styles.copyright}>
            © 2022 Ocean Plastic Leadership Network.
            All rights reserved.
            <LinkTo href='/' target='_blank'>
              <span className={styles.copyrightLink}>Privacy Policy Terms</span>
            </LinkTo>
            and
            <LinkTo href='/' target='_blank'>
              <span className={styles.copyrightLink}>Conditions</span>
            </LinkTo>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
