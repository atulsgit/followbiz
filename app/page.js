'use client'

import { useState } from 'react'

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)

    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (res.ok) {
      setSubmitted(true)
    }
    setLoading(false)
  }

  return (
    <div style={s.page}>
      {/* Background effects */}
      <div style={s.grid} />
      <div style={s.orb1} />
      <div style={s.orb2} />
      <div style={s.orb3} />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div key={i} style={{ ...s.particle, ...particleStyles[i] }} />
      ))}

      <div style={s.container}>

        {/* Badge */}
        <div style={s.badge}>
          <span style={s.badgeDot} />
          <span>Launching Soon</span>
        </div>

        {/* Logo */}
        <div style={s.logo}>
          follow<span style={s.logoAccent}>biz</span>
        </div>

        {/* Headline */}
        <h1 style={s.headline}>
          Turn Every Customer Into
          <br />
          <span style={s.highlight}>Reviews & Repeat Business</span>
        </h1>

        {/* Subheadline */}
        <p style={s.sub}>
          The simplest way for salons, clinics, and trades to automatically
          follow up with customers, collect 5-star reviews, and bring them
          back — without lifting a finger.
        </p>

        {/* Features pills */}
        <div style={s.pills}>
          {['⚡ Automated Follow-ups', '⭐ Review Requests', '🔄 Re-engagement Campaigns', '📱 QR Check-in'].map(f => (
            <div key={f} style={s.pill}>{f}</div>
          ))}
        </div>

        {/* Email capture */}
        {!submitted ? (
          <form onSubmit={handleSubmit} style={s.form}>
            <div style={s.inputWrap}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email for early access"
                style={s.input}
                required
              />
              <button
                type="submit"
                style={{ ...s.btn, ...(loading ? s.btnLoading : {}) }}
                disabled={loading}
              >
                {loading ? '...' : 'Get Early Access →'}
              </button>
            </div>
            <p style={s.formNote}>
              🔒 No spam. Be first to know when we launch + get 50% off.
            </p>
          </form>
        ) : (
          <div style={s.successBox}>
            <div style={s.successIcon}>🎉</div>
            <p style={s.successText}>You're on the list!</p>
            <p style={s.successSub}>We'll notify you the moment we launch with your exclusive early access discount.</p>
          </div>
        )}

        {/* Business types */}
        <div style={s.bizTypes}>
          <span style={s.bizLabel}>Built for</span>
          {['💇 Salons', '🏥 Clinics', '🔧 Trades', '🍕 Restaurants', '💆 Spas'].map(b => (
            <span key={b} style={s.bizType}>{b}</span>
          ))}
        </div>

      </div>

      {/* Footer */}
      <div style={s.footer}>
        <span>© 2026 Followbiz</span>
        <span style={s.footerDot}>·</span>
        <a href="mailto:hello@followbiz.com" style={s.footerLink}>hello@followbiz.com</a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .logo { animation: fadeUp 0.6s ease both; }
        .badge { animation: fadeUp 0.5s ease both; }
        input:focus { outline: none; border-color: rgba(249,115,22,0.5) !important; box-shadow: 0 0 0 3px rgba(249,115,22,0.1); }
        input::placeholder { color: #6b6560; }
      `}</style>
    </div>
  )
}

const particleStyles = [
  { width: 6, height: 6, top: '15%', left: '10%', animationDelay: '0s', animationDuration: '6s' },
  { width: 4, height: 4, top: '25%', right: '15%', animationDelay: '1s', animationDuration: '8s' },
  { width: 8, height: 8, top: '60%', left: '5%', animationDelay: '2s', animationDuration: '7s' },
  { width: 5, height: 5, bottom: '20%', right: '10%', animationDelay: '0.5s', animationDuration: '9s' },
  { width: 3, height: 3, top: '40%', left: '20%', animationDelay: '1.5s', animationDuration: '5s' },
  { width: 7, height: 7, bottom: '30%', right: '20%', animationDelay: '3s', animationDuration: '7s' },
]

const s = {
  page: {
    minHeight: '100vh',
    background: '#111110',
    fontFamily: "'DM Sans', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: '40px 24px',
  },
  grid: {
    position: 'fixed',
    inset: 0,
    backgroundImage: 'linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)',
    backgroundSize: '60px 60px',
    pointerEvents: 'none',
  },
  orb1: {
    position: 'fixed',
    width: 600, height: 600,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)',
    top: -200, right: -100,
    pointerEvents: 'none',
  },
  orb2: {
    position: 'fixed',
    width: 500, height: 500,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)',
    bottom: -150, left: -100,
    pointerEvents: 'none',
  },
  orb3: {
    position: 'fixed',
    width: 300, height: 300,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)',
    top: '40%', left: '30%',
    pointerEvents: 'none',
  },
  particle: {
    position: 'fixed',
    borderRadius: '50%',
    background: 'rgba(249,115,22,0.3)',
    animation: 'float 6s ease-in-out infinite',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: 680,
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 28,
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(249,115,22,0.08)',
    border: '1px solid rgba(249,115,22,0.2)',
    color: '#f97316',
    padding: '6px 16px',
    borderRadius: 100,
    fontSize: '0.78rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    animation: 'fadeUp 0.5s ease both',
  },
  badgeDot: {
    width: 6, height: 6,
    borderRadius: '50%',
    background: '#f97316',
    display: 'inline-block',
    animation: 'pulse 2s ease-in-out infinite',
  },
  logo: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 800,
    color: '#f5f0eb',
    letterSpacing: '-1px',
    animation: 'fadeUp 0.6s 0.1s ease both',
    opacity: 0,
  },
  logoAccent: {
    color: '#f97316',
  },
  headline: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: 800,
    color: '#f5f0eb',
    letterSpacing: '-1.5px',
    lineHeight: 1.1,
    margin: 0,
    animation: 'fadeUp 0.7s 0.2s ease both',
    opacity: 0,
  },
  highlight: {
    background: 'linear-gradient(135deg, #f97316, #fbbf24)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  sub: {
    color: '#6b6560',
    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
    lineHeight: 1.7,
    maxWidth: 540,
    margin: 0,
    animation: 'fadeUp 0.7s 0.3s ease both',
    opacity: 0,
  },
  pills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    animation: 'fadeUp 0.7s 0.4s ease both',
    opacity: 0,
  },
  pill: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#a09890',
    padding: '7px 16px',
    borderRadius: 100,
    fontSize: '0.82rem',
    fontWeight: 500,
  },
  form: {
    width: '100%',
    maxWidth: 520,
    animation: 'fadeUp 0.7s 0.5s ease both',
    opacity: 0,
  },
  inputWrap: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    minWidth: 240,
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 12,
    color: '#f5f0eb',
    padding: '14px 20px',
    fontSize: '0.95rem',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'border-color 0.2s, box-shadow 0.2s',
  },
  btn: {
    background: '#f97316',
    color: '#000',
    border: 'none',
    borderRadius: 12,
    padding: '14px 24px',
    fontSize: '0.92rem',
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 20px rgba(249,115,22,0.3)',
  },
  btnLoading: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  formNote: {
    color: '#6b6560',
    fontSize: '0.78rem',
    marginTop: 12,
  },
  successBox: {
    background: 'rgba(249,115,22,0.06)',
    border: '1px solid rgba(249,115,22,0.2)',
    borderRadius: 20,
    padding: '32px 40px',
    animation: 'fadeUp 0.5s ease both',
  },
  successIcon: {
    fontSize: '2.5rem',
    marginBottom: 12,
  },
  successText: {
    color: '#f5f0eb',
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: 8,
  },
  successSub: {
    color: '#6b6560',
    fontSize: '0.88rem',
    lineHeight: 1.6,
  },
  bizTypes: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
    animation: 'fadeUp 0.7s 0.6s ease both',
    opacity: 0,
  },
  bizLabel: {
    color: '#6b6560',
    fontSize: '0.8rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  bizType: {
    color: '#a09890',
    fontSize: '0.85rem',
    fontWeight: 500,
  },
  footer: {
    position: 'relative',
    zIndex: 1,
    marginTop: 48,
    color: '#6b6560',
    fontSize: '0.8rem',
    display: 'flex',
    gap: 12,
    alignItems: 'center',
  },
  footerDot: {
    opacity: 0.4,
  },
  footerLink: {
    color: '#6b6560',
    textDecoration: 'none',
  },
}