export default function TermsPage() {
  return (
    <div style={s.page}>
      <div style={s.container}>

        <a href="/" style={s.logo}>Follow<span style={s.logoAccent}>Biz</span></a>

        <h1 style={s.title}>Terms of Service</h1>
        <p style={s.lastUpdated}>Last updated: April 2026</p>

        <div style={s.content}>

          <section style={s.section}>
            <p style={s.intro}>
              Please read these Terms of Service ("Terms") carefully before using Followbiz ("the Service"), operated by Followbiz ("we", "us", or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>1. Description of Service</h2>
            <p style={s.p}>
              Followbiz is a customer follow-up and review automation platform designed for local service businesses. The Service enables businesses to manage customer relationships, send automated follow-up emails, request Google reviews, and engage customers via QR code check-in pages.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>2. Eligibility</h2>
            <p style={s.p}>
              You must be at least 18 years old and capable of forming a binding contract to use the Service. By using the Service, you represent that you meet these requirements. The Service is intended for business use only, not personal consumer use.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>3. Account Registration</h2>
            <p style={s.p}>
              You must create an account to use the Service. You agree to provide accurate, complete, and current information during registration and to keep your account credentials secure. You are responsible for all activity that occurs under your account. Notify us immediately at contact@followbiz.com if you suspect any unauthorised use of your account.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>4. Subscription & Payment</h2>
            <p style={s.p}>The Service is offered on a subscription basis. By selecting a paid plan, you agree to the following:</p>
            <ul style={s.ul}>
              <li style={s.li}>Subscription fees are billed monthly in advance.</li>
              <li style={s.li}>All payments are processed securely via Stripe. We do not store your payment details.</li>
              <li style={s.li}>Prices are subject to change with 30 days notice. Continued use after a price change constitutes acceptance.</li>
              <li style={s.li}>Launch promotional pricing (e.g. 50% off first 3 months) is available for a limited time and subject to change without notice.</li>
              <li style={s.li}>Subscriptions automatically renew unless cancelled before the next billing date.</li>
            </ul>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>5. Cancellation & Refunds</h2>
            <p style={s.p}>
              You may cancel your subscription at any time through the billing portal in your account settings. Upon cancellation, your account will remain active until the end of the current billing period. We do not offer refunds for partial months or unused periods. If you believe you have been charged in error, contact us at contact@followbiz.com within 7 days of the charge.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>6. Acceptable Use</h2>
            <p style={s.p}>You agree not to use the Service to:</p>
            <ul style={s.ul}>
              <li style={s.li}>Send unsolicited commercial emails (spam) to individuals who have not opted in or visited your business.</li>
              <li style={s.li}>Violate any applicable laws, including anti-spam laws (CAN-SPAM, CASL, GDPR).</li>
              <li style={s.li}>Upload or transmit malicious code, viruses, or harmful content.</li>
              <li style={s.li}>Attempt to gain unauthorised access to any part of the Service or its infrastructure.</li>
              <li style={s.li}>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
              <li style={s.li}>Use the Service for any unlawful, fraudulent, or harmful purpose.</li>
            </ul>
            <p style={s.p}>
              We reserve the right to suspend or terminate accounts that violate these terms without notice or refund.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>7. Customer Data & Email Consent</h2>
            <p style={s.p}>
              You are solely responsible for ensuring you have obtained appropriate consent from your customers before adding them to the Service or sending them emails. You represent and warrant that your use of the Service complies with all applicable privacy and anti-spam laws. Followbiz is a tool — the responsibility for lawful use lies with you, the business owner.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>8. Data & Privacy</h2>
            <p style={s.p}>
              We collect and process data as described in our <a href="/privacy" style={s.link}>Privacy Policy</a>, which is incorporated into these Terms by reference. We use your data solely to provide and improve the Service. We do not sell your data or your customers' data to third parties.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>9. Intellectual Property</h2>
            <p style={s.p}>
              All content, features, and functionality of the Service — including but not limited to software, design, text, and graphics — are owned by Followbiz and protected by applicable intellectual property laws. You may not copy, modify, distribute, or reverse engineer any part of the Service without our express written permission.
            </p>
            <p style={s.p}>
              You retain ownership of all data and content you upload to the Service. By using the Service, you grant us a limited licence to use your data solely to operate and provide the Service.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>10. Third-Party Services</h2>
            <p style={s.p}>
              The Service integrates with third-party providers including Stripe (payments), Supabase (database), Resend (email delivery), and Google (review links). Your use of these integrations is subject to their respective terms of service. We are not responsible for the actions, content, or policies of third-party services.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>11. Disclaimer of Warranties</h2>
            <p style={s.p}>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
            </p>
            <p style={s.p}>
              We do not guarantee any specific results from using the Service, including but not limited to increases in reviews, customer retention, or revenue.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>12. Limitation of Liability</h2>
            <p style={s.p}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, FOLLOWBIZ SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, GOODWILL, OR BUSINESS INTERRUPTION, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
            </p>
            <p style={s.p}>
              OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE 3 MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>13. Indemnification</h2>
            <p style={s.p}>
              You agree to indemnify and hold harmless Followbiz and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses (including legal fees) arising from your use of the Service, your violation of these Terms, or your violation of any third-party rights.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>14. Modifications to the Service & Terms</h2>
            <p style={s.p}>
              We reserve the right to modify or discontinue the Service at any time with or without notice. We may update these Terms from time to time. We will notify you of material changes via email or a notice on the Service. Continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>15. Governing Law</h2>
            <p style={s.p}>
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Delaware.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>16. Contact</h2>
            <p style={s.p}>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p style={s.p}>
              <strong>Followbiz</strong><br />
              Email: <a href="mailto:contact@followbiz.com" style={s.link}>contact@followbiz.com</a><br />
              Website: <a href="https://followbiz.com" style={s.link}>followbiz.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}

const s = {
  page: {
    minHeight: '100vh',
    background: 'var(--bg)',
    fontFamily: "'DM Sans', sans-serif",
    padding: '60px 24px',
  },
  container: {
    maxWidth: 760,
    margin: '0 auto',
  },
  logo: {
    display: 'inline-block',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 800,
    fontSize: '1.4rem',
    color: 'var(--text)',
    textDecoration: 'none',
    letterSpacing: '-0.5px',
    marginBottom: 48,
  },
  logoAccent: { color: '#f97316' },
  title: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
    fontWeight: 800,
    color: 'var(--text)',
    letterSpacing: '-1px',
    marginBottom: 8,
  },
  lastUpdated: {
    color: 'var(--muted)',
    fontSize: '0.85rem',
    marginBottom: 48,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 32,
  },
  section: {
    borderBottom: '1px solid var(--border)',
    paddingBottom: 32,
  },
  intro: {
    color: 'var(--muted)',
    lineHeight: 1.8,
    fontSize: '0.95rem',
  },
  h2: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.1rem',
    fontWeight: 700,
    color: 'var(--text)',
    marginBottom: 12,
  },
  p: {
    color: 'var(--muted)',
    lineHeight: 1.8,
    fontSize: '0.92rem',
    marginBottom: 12,
  },
  ul: {
    color: 'var(--muted)',
    lineHeight: 1.8,
    fontSize: '0.92rem',
    paddingLeft: 20,
    marginBottom: 12,
  },
  li: {
    marginBottom: 6,
  },
  link: {
    color: '#f97316',
    textDecoration: 'none',
  },
}
