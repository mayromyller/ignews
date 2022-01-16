import { SignInButton } from './SignInButton'
import Image from 'next/image'

import Logo from '../../../public/images/logo.svg'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src={Logo} alt="React Newsletter" />

        <nav className={styles.navigation}>
          <a className={styles.navigation__link}>Home</a>
          <a className={styles.navigation__link}>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
