import { supabase } from '../lib/supabase'

export default function Login() {
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    })

    if (error) {
      alert(error.message)
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Sign in to continue</p>

        <button onClick={handleGoogleLogin} style={styles.button}>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0b0b0b',
    color: '#fff',
  },
  card: {
    padding: '40px',
    borderRadius: '12px',
    background: '#111',
    boxShadow: '0 0 40px rgba(0,0,0,0.5)',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '28px',
    marginBottom: '8px',
  },
  subtitle: {
    opacity: 0.7,
    marginBottom: '24px',
  },
  button: {
    padding: '12px 20px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
}
