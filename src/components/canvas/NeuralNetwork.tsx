'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles({ count = 120 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null)
  const lineRef = useRef<THREE.LineSegments>(null)
  const mouse = useRef({ x: 0, y: 0 })

  const { size } = useThree()

  // Generate random particles
  const [particles, velocities] = useMemo(() => {
    const tempParticles = []
    const tempVelocities = []
    for (let i = 0; i < count; i++) {
      tempParticles.push(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      )
      tempVelocities.push(
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005,
        (Math.random() - 0.5) * 0.005
      )
    }
    return [new Float32Array(tempParticles), new Float32Array(tempVelocities)]
  }, [count])

  // Track mouse coordinates
  const handleMouseMove = (event: MouseEvent) => {
    mouse.current.x = (event.clientX / size.width) * 2 - 1
    mouse.current.y = -(event.clientY / size.height) * 2 + 1
  }

  useMemo(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
    }
  }, [size])

  useFrame((state) => {
    if (!meshRef.current || !lineRef.current) return

    const pointsGeometry = meshRef.current.geometry
    const positions = pointsGeometry.attributes.position.array as Float32Array

    const lineGeometry = lineRef.current.geometry
    const linePositions: number[] = []

    // 1. Update particle positions & apply mouse force
    for (let i = 0; i < count; i++) {
      const idx = i * 3
      positions[idx] += velocities[idx]
      positions[idx + 1] += velocities[idx + 1]
      positions[idx + 2] += velocities[idx + 2]

      // Bounce boundaries
      if (Math.abs(positions[idx]) > 5) velocities[idx] *= -1
      if (Math.abs(positions[idx + 1]) > 5) velocities[idx + 1] *= -1
      if (Math.abs(positions[idx + 2]) > 5) velocities[idx + 2] *= -1

      // Mouse interactive push/pull
      const dx = positions[idx] - mouse.current.x * 3
      const dy = positions[idx + 1] - mouse.current.y * 3
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 1.8) {
        positions[idx] += dx * 0.01
        positions[idx + 1] += dy * 0.01
      }
    }
    pointsGeometry.attributes.position.needsUpdate = true

    // 2. Compute dynamic lines between close particles
    const maxDist = 1.6
    for (let i = 0; i < count; i++) {
      const idxA = i * 3
      const ax = positions[idxA]
      const ay = positions[idxA + 1]
      const az = positions[idxA + 2]

      for (let j = i + 1; j < count; j++) {
        const idxB = j * 3
        const bx = positions[idxB]
        const by = positions[idxB + 1]
        const bz = positions[idxB + 2]

        const dx = ax - bx
        const dy = ay - by
        const dz = az - bz
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < maxDist) {
          linePositions.push(ax, ay, az, bx, by, bz)
        }
      }
    }

    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    )
    lineGeometry.attributes.position.needsUpdate = true

    // Slow rotation of the scene
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
    lineRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
  })

  return (
    <group>
      {/* Particles */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach='attributes-position'
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color='#3B82F6'
          size={0.06}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
        />
      </points>

      {/* Connection Lines */}
      <lineSegments ref={lineRef}>
        <bufferGeometry />
        <lineBasicMaterial
          color='#7C3AED'
          transparent={true}
          opacity={0.15}
          linewidth={1}
        />
      </lineSegments>
    </group>
  )
}

export default function NeuralNetwork() {
  return (
    <div className='w-full h-full absolute inset-0 -z-10 bg-transparent opacity-65'>
      <Canvas camera={{ position: [0, 0, 4.5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  )
}
