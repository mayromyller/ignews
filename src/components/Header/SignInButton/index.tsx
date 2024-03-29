import { signIn, signOut, useSession } from 'next-auth/react'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const { data: session } = useSession()

  return session ? (
    <button className={styles.signIn_button} onClick={() => signOut()}>
      <FaGithub color="#04D361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.signIn_button}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#EBA417" />
      Sing in with GitHub
    </button>
  )
}
