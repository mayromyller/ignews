import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { stripe } from '../services/stripe'

import SubscribeButton from '../components/SubscribeButton'

import womanImage from '../../public/images/woman.svg'

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
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
            <span className={styles.pricing}>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src={womanImage} alt="Woman coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KCX9lIIFgtLy4ClEpKwEPMi')

  const product = {
    priceId: price.id,
    amount: Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24h
  }
}
