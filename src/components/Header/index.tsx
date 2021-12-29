import { SignInButton } from './SignInButton'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/images/logo.svg" alt="React Newsletter" />

        <nav className={styles.navigation}>
          <a className={styles.navigation__link}>Home</a>
          <a className={styles.navigation__link}>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
