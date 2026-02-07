import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, Sparkles, MeshTransmissionMaterial, Lightformer } from '@react-three/drei';
import * as THREE from 'three';

function FloatingObjects() {
  const { viewport } = useThree();
  
  return (
    <group>
      {/* Central Ring */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[viewport.width / 4, viewport.height / 5, -5]}>
          <torusGeometry args={[2, 0.5, 64, 128]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={2}
            roughness={0}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.06}
            anisotropy={0.1}
            color="#ffffff"
          />
        </mesh>
      </Float>

      {/* Floating Sphere */}
      <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-viewport.width / 4, -viewport.height / 4, -2]}>
          <sphereGeometry args={[1.5, 64, 64]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={1}
            roughness={0.1}
            transmission={1}
            ior={1.2}
            chromaticAberration={0.05}
            color="#818cf8"
          />
        </mesh>
      </Float>

      {/* Abstract Icosahedron */}
      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, viewport.height / 3, -8]}>
          <icosahedronGeometry args={[3, 0]} />
          <meshPhysicalMaterial 
            color="#c7d2fe"
            wireframe
            transparent
            opacity={0.3}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Rig() {
  const { camera, pointer } = useThree();
  
  useFrame(() => {
    // Subtle parallax response to pointer
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.5, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.5, 0.05);
    camera.lookAt(0, 0, -2);
  });
  
  return null;
}

export function Scene() {
  return (
    <>
      <color attach="background" args={['#050508']} />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} penumbra={1} intensity={1.5} color="#ffffff" />
      <spotLight position={[-10, -10, -10]} penumbra={1} intensity={1} color="#6366f1" />
      
      <FloatingObjects />
      <Sparkles count={250} scale={15} size={2} speed={0.4} opacity={0.3} color="#ffffff" />
      
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[5, 1, -1]} scale={[10, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />
        </group>
      </Environment>
      
      <Rig />
      <fog attach="fog" args={['#050508', 5, 20]} />
    </>
  );
}
