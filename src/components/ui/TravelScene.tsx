import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Mesh } from 'three';

function FloatingOrb() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.45;
    meshRef.current.rotation.y += delta * 0.6;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.3) * 0.18;
  });

  return (
    <mesh ref={meshRef} scale={1.15}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#0853a4"
        emissive="#0f5d9a"
        emissiveIntensity={0.6}
        metalness={0.35}
        roughness={0.25}
      />
    </mesh>
  );
}

export function TravelScene() {
  return (
    <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(8,83,164,0.2),_transparent_70%)]">
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }} dpr={[1, 1.8]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[3, 4, 4]} intensity={1.6} color="#fbb03b" />
        <pointLight position={[-3, -2, 2]} intensity={1.1} color="#ffffff" />
        <FloatingOrb />
        <mesh rotation={[0.8, 0.7, 0.2]}>
          <torusKnotGeometry args={[1.25, 0.24, 140, 24]} />
          <meshStandardMaterial
            color="#fbb03b"
            emissive="#8a4a02"
            emissiveIntensity={0.35}
            metalness={0.2}
            roughness={0.28}
          />
        </mesh>
      </Canvas>
    </div>
  );
}
