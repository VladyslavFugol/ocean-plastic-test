import { useState } from 'react'
import classNames from 'classnames'
import { LinkTo } from '@/components/LinkTo'
import { Menu } from './components/Menu'
import { Logo } from '@/assets/Logo'
import { links } from '../../constants/links'
import styles from './Header.module.scss'

function Header({ theme }) {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const renderLinks = () => {
    return (
      <>
        {links.map(({ value, href }) => (
            <LinkTo href={href} key={value}>
              <span className={styles.navigationLink}>{value}</span>
            </LinkTo>
          ),
        )}
      </>
    )
  }

  return (
    <div>
      <header className={classNames(styles.header, styles[theme])}>
        <div
          className={classNames(styles.container, isMenuOpen ? styles.containerActive : '', 'container')}
        >
          <div className={styles.logo}>
            <Logo/>
          </div>
          <nav className={styles.navigation}>
            {renderLinks()}
          </nav>
          <LinkTo href="/">
            <div className={styles.community}>
              <strong>BECOME A MEMBER</strong>
              <span>Join our community</span>
            </div>
          </LinkTo>
          <div
            className={classNames(styles.burger, isMenuOpen ? styles.burgerActive : '')}
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <span/>
          </div>
        </div>
      </header>
      <Menu
        links={links}
        theme={theme}
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
      />
    </div>
  )
}

export default Header
