'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { memories } from '@/data/memories';

function GlobeMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshPhongMaterial
        map={createGlobeTexture()}
        shininess={5}
      />
    </mesh>
  );
}

function createGlobeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Ocean blue background
  ctx.fillStyle = '#1a4d7a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Land masses (simplified)
  ctx.fillStyle = '#2d5a2d';
  const landMasses = [
    { x: 500, y: 300, w: 400, h: 250 }, // North America
    { x: 1000, y: 350, w: 300, h: 200 }, // Europe
    { x: 1300, y: 500, w: 350, h: 300 }, // Africa
    { x: 1600, y: 300, w: 400, h: 250 }, // Asia
  ];

  landMasses.forEach(land => {
    ctx.beginPath();
    ctx.ellipse(land.x, land.y, land.w, land.h, 0, 0, Math.PI * 2);
    ctx.fill();
  });

  return new THREE.CanvasTexture(canvas);
}

function Markers() {
  return (
    <>
      {memories.map((memory) => {
        const phi = (90 - memory.coordinates[0]) * (Math.PI / 180);
        const theta = (memory.coordinates[1] + 180) * (Math.PI / 180);
        
        const x = -(2.1 * Math.sin(phi) * Math.cos(theta));
        const y = 2.1 * Math.cos(phi);
        const z = 2.1 * Math.sin(phi) * Math.sin(theta);

        return (
          <mesh key={memory.id} position={[x, y, z]}>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshBasicMaterial color="#e94560" />
            <mesh scale={1.5}>
              <sphereGeometry args={[0.15, 32, 32]} />
              <meshBasicMaterial
                color="#e94560"
                transparent
                opacity={0.3}
                wireframe
              />
            </mesh>
          </mesh>
        );
      })}
    </>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-primary via-secondary to-accent">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          autoRotate={false}
          minDistance={3}
          maxDistance={10}
        />
        <GlobeMesh />
        <Markers />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0f3460" />
      </Canvas>
    </div>
  );
}
