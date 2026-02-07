import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

import Login from './pages/Login'
import CanvasScene from './components/Scene'
import Dashboard from './components/Dashboard'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
      setLoading(false)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (loading) return null

  return (
    <Routes>
      {/* Login route */}
      <Route
        path="/login"
        element={!session ? <Login /> : <Navigate to="/" />}
      />

      {/* Protected Dashboard */}
      <Route
        path="/"
        element={
          session ? (
            <div className="relative w-full h-full overflow-hidden bg-black selection:bg-indigo-500/30">
              <div className="absolute inset-0 z-0">
                <CanvasScene />
              </div>

              <div className="absolute inset-0 z-10 flex w-full h-full p-6">
                <Dashboard />
              </div>
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  )
}
