import Image from 'next/image'
import Link from 'next/link'

import { SignInButton } from './SignInButton'

import Logo from '../../../public/images/logo.svg'

import styles from './styles.module.scss'
import { ActiveLink } from '../ActiveLink/index'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src={Logo} alt="React Newsletter" />

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
