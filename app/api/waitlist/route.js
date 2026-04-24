import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { email } = await req.json()

    if (!email) {
      return Response.json({ error: 'Email is required' }, { status: 400 })
    }

    const { error } = await supabase
      .from('waitlist')
      .insert({ email })

    if (error) {
      if (error.code === '23505') {
        // Duplicate email — treat as success so we don't leak info
        return Response.json({ success: true })
      }
      throw error
    }

    // Send confirmation email
    await resend.emails.send({
      from: 'Followbiz <contact@followbiz.com>',
      to: email,
      subject: "You're on the list! 🎉",
      html: `
        <!DOCTYPE html>
        <html>
        <body style="font-family: Arial, sans-serif; background: #111110; margin: 0; padding: 40px 20px;">
          <div style="max-width: 520px; margin: 0 auto; background: #1a1a18; border: 1px solid rgba(249,115,22,0.2); border-radius: 20px; overflow: hidden;">

            <!-- Header -->
            <div style="padding: 40px 40px 32px; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.06);">
              <div style="font-size: 2rem; font-weight: 800; color: #f5f0eb; letter-spacing: -1px;">
                follow<span style="color: #f97316;">biz</span>
              </div>
            </div>

            <!-- Body -->
            <div style="padding: 40px;">
              <div style="font-size: 2rem; text-align: center; margin-bottom: 16px;">🎉</div>
              <h1 style="color: #f5f0eb; font-size: 1.4rem; font-weight: 700; text-align: center; margin: 0 0 16px;">
                You're on the list!
              </h1>
              <p style="color: #6b6560; line-height: 1.7; text-align: center; margin: 0 0 28px;">
                Thanks for signing up for early access to Followbiz. We're putting the finishing touches on things and will notify you the moment we launch.
              </p>

              <!-- Highlight box -->
              <div style="background: rgba(249,115,22,0.08); border: 1px solid rgba(249,115,22,0.2); border-radius: 14px; padding: 20px 24px; margin-bottom: 28px; text-align: center;">
                <div style="color: #f97316; font-size: 1.3rem; font-weight: 800; margin-bottom: 4px;">50% OFF</div>
                <div style="color: #a09890; font-size: 0.85rem;">for your first 3 months — exclusively for early access members</div>
              </div>

              <p style="color: #6b6560; font-size: 0.85rem; line-height: 1.7; text-align: center; margin: 0;">
                In the meantime, if you have any questions just reply to this email — we'd love to hear from you.
              </p>
            </div>

            <!-- Footer -->
            <div style="padding: 20px 40px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center;">
              <p style="color: #4a4a48; font-size: 0.75rem; margin: 0;">
                © 2026 Followbiz · <a href="mailto:contact@followbiz.com" style="color: #4a4a48;">contact@followbiz.com</a>
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
    })

    return Response.json({ success: true })

  } catch (err) {
    console.error('Waitlist error:', err)
    return Response.json({ error: err.message }, { status: 500 })
  }
}
