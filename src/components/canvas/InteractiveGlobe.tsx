'use client'

import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'

interface CountryNode {
  name: string;
  lat: number;
  lng: number;
  story: string;
}

const COLLABORATIONS: CountryNode[] = [
  { name: 'India', lat: 20.5937, lng: 78.9629, story: 'AIESEC Delhi IIT: Led exchange initiatives, managing cultural integration and operations.' },
  { name: 'Germany', lat: 51.1657, lng: 10.4515, story: 'Language study & research partnership on political communication.' },
  { name: 'Netherlands', lat: 52.1326, lng: 5.2913, story: 'Eindhoven: Industrial Design research collaboration on human-centered UI.' },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025, story: 'Cross-cultural leadership program delegate coordination.' },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253, story: 'Youth impact program communication layout planning.' },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360, story: 'Collaboration on international TB & AIDS prevention strategies.' },
  { name: 'Japan', lat: 36.2048, lng: 138.2529, story: 'UX research and emotional mapping platform design feedback.' },
  { name: 'Australia', lat: -25.2744, lng: 133.7751, story: 'Global student engagement and youth leadership workshops.' },
]

function GlobePoints({ radius = 2 }: { radius?: number }) {
  const meshRef = useRef<THREE.Points>(null)

  // Generate random dots representing the continents/texture of the globe
  const dots = useMemo(() => {
    const temp = []
    const count = 600
    for (let i = 0; i < count; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [radius])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          args={[dots, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color='rgba(124, 58, 237, 0.4)'
        size={0.03}
        sizeAttenuation={true}
        transparent={true}
      />
    </points>
  )
}

function CountryMarker({ node, radius = 2, activeNode, setActiveNode }: {
  node: CountryNode;
  radius: number;
  activeNode: string | null;
  setActiveNode: (name: string | null) => void;
}) {
  const [hovered, setHovered] = useState(false)

  // Translate lat/lng to 3D Cartesian coordinates
  const position = useMemo(() => {
    const latRad = (node.lat * Math.PI) / 180
    const lngRad = -(node.lng * Math.PI) / 180 // Negate to match global rotation directions

    const x = radius * Math.cos(latRad) * Math.cos(lngRad)
    const y = radius * Math.sin(latRad)
    const z = radius * Math.cos(latRad) * Math.sin(lngRad)

    return new THREE.Vector3(x, y, z)
  }, [node, radius])

  const isActive = activeNode === node.name || hovered

  return (
    <group position={position}>
      {/* Target Marker */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation()
          setHovered(true)
          setActiveNode(node.name)
        }}
        onPointerOut={() => {
          setHovered(false)
          setActiveNode(null)
        }}
      >
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshBasicMaterial color={isActive ? '#3B82F6' : '#7C3AED'} />
      </mesh>

      {/* Pulsing Outer Ring */}
      <mesh scale={isActive ? [1.6, 1.6, 1.6] : [1.1, 1.1, 1.1]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial
          color={isActive ? '#3B82F6' : '#7C3AED'}
          transparent={true}
          opacity={isActive ? 0.35 : 0.15}
          wireframe={true}
        />
      </mesh>

      {/* Tooltip Overlay */}
      {isActive && (
        <Html distanceFactor={4} position={[0.15, 0.15, 0]} zIndexRange={[100, 1000]}>
          <div className='bg-secondary/95 border border-slate-800/80 rounded-xl p-3 w-52 shadow-glass-md backdrop-blur-md pointer-events-none select-none'>
            <h4 className='font-heading font-semibold text-xs text-sky-400 uppercase tracking-wider'>{node.name}</h4>
            <p className='text-[10px] text-slate-300 leading-normal mt-1'>{node.story}</p>
          </div>
        </Html>
      )}
    </group>
  )
}

function GlobeScene({ activeNode, setActiveNode }: {
  activeNode: string | null;
  setActiveNode: (name: string | null) => void;
}) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current && !activeNode) {
      // Rotate slowly if no active hover
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.04
    }
  })

  return (
    <group ref={groupRef}>
      {/* Translucent Central Sphere */}
      <mesh>
        <sphereGeometry args={[1.98, 32, 32]} />
        <meshBasicMaterial
          color='#080808'
          transparent={true}
          opacity={0.8}
        />
      </mesh>

      {/* Globe Grid Frame */}
      <mesh>
        <sphereGeometry args={[2, 24, 24]} />
        <meshBasicMaterial
          color='rgba(255, 255, 255, 0.02)'
          wireframe={true}
        />
      </mesh>

      <GlobePoints radius={2} />

      {/* Active Collaboration Nodes */}
      {COLLABORATIONS.map((node) => (
        <CountryMarker
          key={node.name}
          node={node}
          radius={2}
          activeNode={activeNode}
          setActiveNode={setActiveNode}
        />
      ))}
    </group>
  )
}

export default function InteractiveGlobe() {
  const [activeNode, setActiveNode] = useState<string | null>(null)

  return (
    <div className='w-full h-[400px] md:h-[500px] relative glass-panel bg-secondary/20 flex items-center justify-center overflow-hidden border border-slate-900'>
      <div className='absolute top-6 left-6 z-10 pointer-events-none'>
        <p className='text-xs font-semibold uppercase tracking-[0.25em] text-accent-blue'>Global Impact Network</p>
        <h3 className='text-xl font-heading font-bold text-white mt-1'>AIESEC International exchange</h3>
      </div>

      <Canvas camera={{ position: [0, 0, 4.2], fov: 60 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={0.8} />
        <GlobeScene activeNode={activeNode} setActiveNode={setActiveNode} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI * 2 / 3}
        />
      </Canvas>

      <div className='absolute bottom-6 left-6 z-10 right-6 text-center pointer-events-none'>
        <span className='text-[10px] text-mutedText uppercase tracking-widest'>Drag to rotate globe • Hover nodes to read case studies</span>
      </div>
    </div>
  )
}
