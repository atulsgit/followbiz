import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(req) {
  try {
    const { priceId, userId, email, businessName } = await req.json()

    // Get or create Stripe customer
    let stripeCustomerId

    const { data: business } = await supabase
      .from('businesses')
      .select('stripe_customer_id')
      .eq('user_id', userId)
      .single()

    if (business?.stripe_customer_id) {
      // Verify the customer exists in the current Stripe mode
      try {
        await stripe.customers.retrieve(business.stripe_customer_id)
        stripeCustomerId = business.stripe_customer_id
      } catch {
        // Customer doesn't exist in this mode (e.g. live vs test), create a new one
        stripeCustomerId = null
      }
    }

    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email,
        name: businessName,
        metadata: { userId },
      })
      stripeCustomerId = customer.id

      await supabase
        .from('businesses')
        .update({ stripe_customer_id: stripeCustomerId })
        .eq('user_id', userId)
    }

    // Create checkout session with launch coupon auto-applied
    // const session = await stripe.checkout.sessions.create({
    //   customer: stripeCustomerId,
    //   mode: 'subscription',
    //   payment_method_types: ['card'],
    //   line_items: [{ price: priceId, quantity: 1 }],
    //   discounts: [{ coupon: process.env.STRIPE_LAUNCH_COUPON }],
    //   success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
    //   subscription_data: {
    //     metadata: { userId },
    //   },
    // })


    const session = await stripe.checkout.sessions.create({
  customer: stripeCustomerId,
  mode: 'subscription',
  payment_method_types: ['card'],
  line_items: [{ price: priceId, quantity: 1 }],
  success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
  cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
  metadata: { userId },
  subscription_data: {
    metadata: { userId },
  },
})

    return Response.json({ url: session.url })

  } catch (err) {
    console.error('Checkout error:', err)
    return Response.json({ error: err.message }, { status: 500 })
  }
}