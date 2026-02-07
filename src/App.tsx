import { Routes, Route } from 'react-router-dom'
import CanvasScene from './components/Scene'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <Routes>
      {/* Protected Dashboard */}
      <Route
        path="/"
        element={
          <div className="relative w-full h-full overflow-hidden bg-black selection:bg-indigo-500/30">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
              <CanvasScene />
            </div>

            {/* UI Overlay */}
            <div className="absolute inset-0 z-10 flex w-full h-full p-6">
              <Dashboard />
            </div>
          </div>
        }
      />
    </Routes>
  )
}
