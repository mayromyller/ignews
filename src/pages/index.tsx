import Head from 'next/head'
import SubscribeButton from '../components/SubscribeButton'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>React Newsletter</title>
      </Head>

      <main className={styles.content}>
        <section className={styles.hero}>
          <span className={styles.welcome}>Hey, welcome</span>

          <h1 className={styles.title}>
            News about the <span>React</span> the world.
          </h1>
          <p className={styles.description}>
            Get access to all the publication <br />
            <span className={styles.pricing}>for $9.90 month</span>
          </p>

          <SubscribeButton />
        </section>

        <img src="/images/woman.svg" alt="Woman coding" />
      </main>
    </>
  )
}
