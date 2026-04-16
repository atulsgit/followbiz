'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
  const router = useRouter()
  const [mode, setMode] = useState('login') // 'login' or 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [businessType, setBusinessType] = useState('salon')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  const handleAuth = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      if (mode === 'signup') {
        // 1. Create auth user
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
        })
        if (signUpError) throw signUpError

        // 2. Create business record
        if (data.user) {
          const slug = businessName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '') +
            '-' + Math.random().toString(36).slice(2, 6)

          const { error: bizError } = await supabase
            .from('businesses')
            .insert({
              user_id: data.user.id,
              name: businessName,
              email: email,
              business_type: businessType,
              plan: 'starter',
              slug,
            })
          if (bizError) throw bizError
        }

        setMessage('Account created! Please check your email to confirm, then log in.')
        setMode('login')

      } else {
        // Login
        // const { error: loginError } = await supabase.auth.signInWithPassword({
        //   email,
        //   password,
        // })
        // if (loginError) throw loginError
        // // router.push('/dashboard')
        // router.push('/pricing')
        const { data: loginData, error: loginError } = await supabase.auth.signInWithPassword({
  email,
  password,
})
if (loginError) throw loginError

// Check their plan
const { data: business } = await supabase
  .from('businesses')
  .select('plan')
  .eq('user_id', loginData.user.id)
  .single()

const plan = business?.plan

// Redirect based on plan
if (plan && plan !== 'inactive' && plan !== 'cancelled') {
  router.push('/dashboard')
} else {
  router.push('/pricing')
}
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={styles.page}>
      {/* Background orbs */}
      <div style={styles.orb1} />
      <div style={styles.orb2} />

      <div style={styles.card}>
        {/* Logo */}
        <a href="/" style={styles.logo}>
          Follow<span style={styles.logoAccent}>Biz</span>
        </a>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button
            style={{ ...styles.tab, ...(mode === 'login' ? styles.tabActive : {}) }}
            onClick={() => { setMode('login'); setError(''); setMessage('') }}
          >
            Log In
          </button>
          <button
            style={{ ...styles.tab, ...(mode === 'signup' ? styles.tabActive : {}) }}
            onClick={() => { setMode('signup'); setError(''); setMessage('') }}
          >
            Sign Up
          </button>
        </div>

        <h1 style={styles.heading}>
          {mode === 'login' ? 'Welcome back' : 'Create your account'}
        </h1>
        <p style={styles.subheading}>
          {mode === 'login'
            ? 'Log in to your FollowBiz dashboard'
            : 'Start your 14-day free trial — no card required'}
        </p>

        {/* Error / Success messages */}
        {error && <div style={styles.errorBox}>{error}</div>}
        {message && <div style={styles.successBox}>{message}</div>}

        <form onSubmit={handleAuth} style={styles.form}>
          {/* Signup-only fields */}
          {mode === 'signup' && (
            <>
              <div style={styles.field}>
                <label style={styles.label}>Business Name</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={e => setBusinessName(e.target.value)}
                  placeholder="e.g. Glow Hair Studio"
                  required
                  style={styles.input}
                />
              </div>

              <div style={styles.field}>
                <label style={styles.label}>Business Type</label>
                <select
                  value={businessType}
                  onChange={e => setBusinessType(e.target.value)}
                  style={styles.input}
                >
                  <option value="salon">Hair & Beauty Salon</option>
                  <option value="clinic">Clinic / Healthcare</option>
                  <option value="restaurant">Restaurant & Café</option>
                  <option value="takeout">Takeout & Delivery</option> 
                  <option value="trade">Trade (Plumber, Electrician, etc.)</option>
                  <option value="spa">Spa & Wellness</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </>
          )}

          <div style={styles.field}>
            <label style={styles.label}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@yourbusiness.com"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder={mode === 'signup' ? 'Min. 8 characters' : 'Your password'}
              required
              minLength={8}
              style={styles.input}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{ ...styles.btnPrimary, ...(loading ? styles.btnDisabled : {}) }}
          >
            {loading
              ? 'Please wait...'
              : mode === 'login'
              ? 'Log In →'
              : 'Create Free Account →'}
          </button>
        </form>

        <p style={styles.switchText}>
          {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
          <button
            style={styles.switchLink}
            onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); setMessage('') }}
          >
            {mode === 'login' ? 'Sign up free' : 'Log in'}
          </button>
        </p>

        {mode === 'signup' && (
          <p style={styles.terms}>
            By signing up you agree to our{' '}
            <a href="/terms" style={styles.termsLink}>Terms</a> and{' '}
            <a href="/privacy" style={styles.termsLink}>Privacy Policy</a>
          </p>
        )}
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'var(--bg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    fontFamily: "'DM Sans', sans-serif",
    position: 'relative',
    overflow: 'hidden',
  },
  orb1: {
    position: 'fixed',
    width: '500px',
    height: '500px',
    borderRadius: '50%',
    background: '#fbbf24',
    filter: 'blur(140px)',
    opacity: 0.12,
    top: '-150px',
    right: '-100px',
    pointerEvents: 'none',
  },
  orb2: {
    position: 'fixed',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: '#f97316',
    filter: 'blur(140px)',
    opacity: 0.1,
    bottom: '-100px',
    left: '-100px',
    pointerEvents: 'none',
  },
  card: {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '24px',
    padding: '48px 44px',
    width: '100%',
    maxWidth: '440px',
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
  },
  logo: {
    display: 'block',
    textAlign: 'center',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontWeight: 800,
    fontSize: '1.6rem',
    color: 'var(--text)',
    textDecoration: 'none',
    marginBottom: '28px',
    letterSpacing: '-0.5px',
  },
  logoAccent: { color: '#f97316' },
  tabs: {
    display: 'flex',
    background: 'var(--surface2)',
    borderRadius: '12px',
    padding: '4px',
    marginBottom: '28px',
  },
  tab: {
    flex: 1,
    padding: '10px',
    border: 'none',
    borderRadius: '9px',
    background: 'transparent',
    color: 'var(--muted)',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 600,
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  tabActive: {
    background: 'var(--bg)',
    color: 'var(--text)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  },
  heading: {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '1.7rem',
    fontWeight: 800,
    color: 'var(--text)',
    letterSpacing: '-0.5px',
    marginBottom: '8px',
  },
  subheading: {
    color: 'var(--muted)',
    fontSize: '0.9rem',
    marginBottom: '28px',
    lineHeight: 1.5,
  },
  errorBox: {
    background: 'rgba(255,80,80,0.1)',
    border: '1px solid rgba(255,80,80,0.25)',
    color: '#ff8080',
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '0.85rem',
    marginBottom: '20px',
  },
  successBox: {
    background: 'rgba(249,115,22,0.1)',
    border: '1px solid rgba(249,115,22,0.25)',
    color: '#f97316',
    borderRadius: '10px',
    padding: '12px 16px',
    fontSize: '0.85rem',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    color: 'var(--text)',
    fontSize: '0.85rem',
    fontWeight: 600,
  },
  input: {
    background: 'var(--surface2)',
    border: '1px solid var(--border)',
    borderRadius: '12px',
    color: 'var(--text)',
    padding: '13px 16px',
    fontSize: '0.95rem',
    fontFamily: "'DM Sans', sans-serif",
    outline: 'none',
    transition: 'border-color 0.2s',
    width: '100%',
    boxSizing: 'border-box',
  },
  btnPrimary: {
    background: '#f97316',
    color: '#000',
    border: 'none',
    borderRadius: '12px',
    padding: '15px',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '8px',
    transition: 'all 0.2s',
  },
  btnDisabled: {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
  switchText: {
    textAlign: 'center',
    color: 'var(--muted)',
    fontSize: '0.85rem',
    marginTop: '20px',
  },
  switchLink: {
    background: 'none',
    border: 'none',
    color: '#f97316',
    fontWeight: 600,
    cursor: 'pointer',
    fontSize: '0.85rem',
    padding: 0,
    fontFamily: "'DM Sans', sans-serif",
  },
  terms: {
    textAlign: 'center',
    color: 'var(--muted)',
    fontSize: '0.75rem',
    marginTop: '12px',
  },
  termsLink: {
    color: 'var(--muted)',
    textDecoration: 'underline',
  },
}
