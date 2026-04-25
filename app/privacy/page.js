export default function PrivacyPage() {
  return (
    <div style={s.page}>
      <div style={s.container}>

        <a href="/" style={s.logo}>Follow<span style={s.logoAccent}>Biz</span></a>

        <h1 style={s.title}>Privacy Policy</h1>
        <p style={s.lastUpdated}>Last updated: April 2026</p>

        <div style={s.content}>

          <section style={s.section}>
            <p style={s.intro}>
              This Privacy Policy explains how Followbiz ("we", "us", or "our") collects, uses, and protects information when you use our Service at followbiz.com. By using the Service, you agree to the practices described in this policy.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>1. Information We Collect</h2>
            <p style={s.p}><strong style={s.strong}>Account Information:</strong> When you sign up, we collect your email address, password, business name, and business type.</p>
            <p style={s.p}><strong style={s.strong}>Business Profile:</strong> Information you provide in settings such as phone number, Google review link, website URL, and contact details.</p>
            <p style={s.p}><strong style={s.strong}>Customer Data:</strong> Names, email addresses, and phone numbers of your customers that you add to the Service or that are collected via QR check-in.</p>
            <p style={s.p}><strong style={s.strong}>Payment Information:</strong> Billing is handled by Stripe. We do not store your credit card details. We only store your Stripe customer ID and subscription status.</p>
            <p style={s.p}><strong style={s.strong}>Usage Data:</strong> We collect logs of emails sent, check-ins, and cron job activity to operate the Service.</p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>2. How We Use Your Information</h2>
            <ul style={s.ul}>
              <li style={s.li}>To provide and operate the Service</li>
              <li style={s.li}>To send transactional emails on your behalf to your customers</li>
              <li style={s.li}>To process payments and manage your subscription</li>
              <li style={s.li}>To communicate with you about your account, updates, or support</li>
              <li style={s.li}>To improve and develop the Service</li>
            </ul>
            <p style={s.p}>We do not sell, rent, or share your data or your customers' data with third parties for marketing purposes.</p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>3. Your Customers' Data</h2>
            <p style={s.p}>
              You are the data controller for your customers' personal information. You are responsible for ensuring you have lawful grounds (such as consent) to collect and process your customers' data and to send them emails via our Service.
            </p>
            <p style={s.p}>
              We act as a data processor on your behalf. We process your customers' data only as instructed by you through your use of the Service.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>4. Data Storage & Security</h2>
            <p style={s.p}>
              Your data is stored securely using Supabase, a managed database platform with industry-standard encryption at rest and in transit. We implement reasonable technical and organisational measures to protect your data against unauthorised access, loss, or disclosure.
            </p>
            <p style={s.p}>
              No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>5. Third-Party Services</h2>
            <p style={s.p}>We use the following third-party services to operate the platform:</p>
            <ul style={s.ul}>
              <li style={s.li}><strong style={s.strong}>Supabase</strong> — database and authentication</li>
              <li style={s.li}><strong style={s.strong}>Stripe</strong> — payment processing</li>
              <li style={s.li}><strong style={s.strong}>Resend</strong> — email delivery</li>
              <li style={s.li}><strong style={s.strong}>Vercel</strong> — hosting and infrastructure</li>
            </ul>
            <p style={s.p}>Each of these providers has their own privacy policy and data processing terms.</p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>6. Data Retention</h2>
            <p style={s.p}>
              We retain your account data for as long as your account is active. If you cancel your account, we will delete your data within 90 days unless we are required to retain it for legal or compliance reasons.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>7. Your Rights</h2>
            <p style={s.p}>Depending on your location, you may have the right to:</p>
            <ul style={s.ul}>
              <li style={s.li}>Access the personal data we hold about you</li>
              <li style={s.li}>Request correction of inaccurate data</li>
              <li style={s.li}>Request deletion of your data</li>
              <li style={s.li}>Object to or restrict processing of your data</li>
              <li style={s.li}>Data portability</li>
            </ul>
            <p style={s.p}>To exercise any of these rights, contact us at <a href="mailto:contact@followbiz.com" style={s.link}>contact@followbiz.com</a>.</p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>8. Cookies</h2>
            <p style={s.p}>
              We use essential cookies and local storage to maintain your login session. We do not use tracking cookies or third-party advertising cookies.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>9. Children's Privacy</h2>
            <p style={s.p}>
              The Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, contact us immediately.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>10. Changes to This Policy</h2>
            <p style={s.p}>
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a notice on the Service. Your continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section style={s.section}>
            <h2 style={s.h2}>11. Contact</h2>
            <p style={s.p}>
              If you have any questions or concerns about this Privacy Policy, contact us at:
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
  strong: {
    color: 'var(--text)',
  },
  link: {
    color: '#f97316',
    textDecoration: 'none',
  },
}
