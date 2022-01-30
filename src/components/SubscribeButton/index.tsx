import { useSession, signIn } from 'next-auth/react'

import styles from './styles.module.scss'
import { api } from '../../services/axios'
import { getStripeJs } from '../../services/stripe-js'

interface SubscribeButtonProps {
  priceId: string
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { data: session } = useSession()

  async function handleSubscribe() {
    if (!session) {
      signIn('github')
      return
    }

    try {
      const response = await api.post('/subscribe')
      const { sessionId } = response.data
      const stripeJs = await getStripeJs()
      await stripeJs.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <button className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe now
    </button>
  )
}
