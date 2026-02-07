import { Canvas } from '@react-three/fiber';
import { Scene } from './components/Scene';
import { Dashboard } from './components/Dashboard';

export function App() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-black selection:bg-indigo-500/30">
      {/* 3D Environment Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }} eventSource={document.getElementById('root') || undefined}>
          <Scene />
        </Canvas>
      </div>

      {/* Center Highlighted Text */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none mix-blend-screen opacity-40">
        <h1 className="text-[15vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-transparent drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]">
          ApexHub
        </h1>
      </div>

      {/* Spatial UI Overlay */}
      <div className="absolute inset-0 z-10 flex w-full h-full p-6 pointer-events-none">
        <Dashboard />
      </div>
    </div>
  );
}
