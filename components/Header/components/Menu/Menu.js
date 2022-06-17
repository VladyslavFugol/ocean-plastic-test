import classNames from 'classnames'
import { Button } from '@/components/Button'
import { LinkTo } from '@/components/LinkTo'
import styles from './Menu.module.scss'

function Menu({ links, isMenuOpen, setMenuOpen, theme }) {
  const renderLinks = () => {
    return links.map(link =>
      <LinkTo
        href={link.href}
        className={styles.menuLink}
        key={link.value}
      >
        {link.value}
      </LinkTo>
    )
  }

  return (
    <nav
      className={classNames(styles.menu, styles[theme], isMenuOpen ? styles.menuActive : '')}
      onClick={() => setMenuOpen(false)}
    >
      <div
        className={styles.menuContent}
        onClick={event => event.stopPropagation()}
      >
        {renderLinks()}
        <LinkTo href='/' className={styles.link}>
          <Button
            title="Become a member"
            backgroundColor="PrimeGreen"
            className={styles.menuButton}
          />
        </LinkTo>
      </div>
    </nav>
  )
}

export default Menu
