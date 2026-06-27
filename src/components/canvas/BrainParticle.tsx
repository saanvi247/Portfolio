'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function BrainPoints({ count = 2200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)
  const mouse = useRef({ x: 0, y: 0 })

  // Mathematical approximation of left and right brain lobes with cortical folds (gyri/sulci)
  const particles = useMemo(() => {
    const temp = []
    const pointsPerLobe = count / 2

    for (let lobe = 0; lobe < 2; lobe++) {
      const isLeft = lobe === 0
      const centerX = isLeft ? -0.45 : 0.45

      for (let i = 0; i < pointsPerLobe; i++) {
        // Spherical coordinates
        const u = Math.random() * Math.PI * 2
        const v = Math.random() * Math.PI

        // Lobe base dimensions (ellipsoid)
        const rx = 0.65
        const ry = 0.8
        const rz = 0.65

        // Gyri/sulci folding frequency
        const foldFrequency = 9
        const foldAmplitude = 0.12
        const folds = 1.0 + foldAmplitude * Math.sin(u * foldFrequency) * Math.sin(v * foldFrequency)

        // Cartesian coordinates relative to lobe center
        const x = centerX + rx * Math.sin(v) * Math.cos(u) * folds
        const y = ry * Math.sin(v) * Math.sin(u) * folds
        const z = rz * Math.cos(v) * folds

        temp.push(x, y, z)
      }
    }
    return new Float32Array(temp)
  }, [count])

  // Capture mouse move locally within canvas boundaries
  const handleMouseMove = (event: MouseEvent) => {
    mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1
  }

  useMemo(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return

    const time = state.clock.getElapsedTime()
    
    // Rotate brain slowly
    pointsRef.current.rotation.y = time * 0.08
    pointsRef.current.rotation.x = Math.sin(time * 0.04) * 0.1

    // Update positions slightly based on mouse hover coordinates
    const geometry = pointsRef.current.geometry
    const positions = geometry.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      const idx = i * 3
      
      // Original generated positions (keep as base)
      const baseZ = positions[idx + 2]
      
      // Apply breathing micro-animation
      const breathing = Math.sin(time + idx * 0.01) * 0.002
      positions[idx] += breathing
      positions[idx + 1] += breathing

      // Mouse responsive parallax displacement
      const dx = positions[idx] - mouse.current.x * 1.5
      const dy = positions[idx + 1] - mouse.current.y * 1.5
      const dist = Math.sqrt(dx * dx + dy * dy)
      
      if (dist < 1.0) {
        positions[idx] += dx * 0.003
        positions[idx + 1] += dy * 0.003
      }
    }
    geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color='#3B82F6'
        size={0.035}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function BrainParticle() {
  return (
    <div className='w-full h-[320px] md:h-[400px] relative glass-panel bg-secondary/10 flex items-center justify-center border border-slate-900 overflow-hidden'>
      <div className='absolute top-6 left-6 z-10 pointer-events-none'>
        <p className='text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue'>Cognition Map</p>
        <h3 className='text-xl font-heading font-bold text-white mt-1'>Neurological Skills Cloud</h3>
      </div>
      
      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        <BrainPoints />
      </Canvas>

      <div className='absolute bottom-6 right-6 z-10 pointer-events-none text-right'>
        <span className='text-[9px] text-mutedText uppercase tracking-widest'>Interconnected Neural Networks</span>
      </div>
    </div>
  )
}
