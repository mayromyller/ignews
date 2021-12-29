import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton() {
  const userIsLogged = true

  return userIsLogged ? (
    <button className={styles.signIn_button}>
      <FaGithub color="#04D361" />
      User Name
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signIn_button}>
      <FaGithub color="#EBA417" />
      Sing in with GitHub
    </button>
  )
}
