import React, { useRef, Suspense, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, ContactShadows } from '@react-three/drei'

function Avatar({ scrollY, mousePosition }) {
  const { scene } = useGLTF('/my_avatar.glb')
  const ref = useRef()

  useFrame((state, delta) => {
    if (!ref.current) return
    
    const t = state.clock.getElapsedTime()
    
    // 1. Breathing/Idle Animation - Gentle floating
    const breathingFloat = Math.sin(t * 1.5) * 0.08
    
    // 2. Scroll-based position and rotation
    const scrollProgress = Math.min(scrollY.current / 2000, 1) // normalize scroll
    const scrollRotation = scrollProgress * Math.PI * 0.5 // rotate up to 90 degrees
    const scrollFloat = Math.sin(scrollProgress * Math.PI) * 0.3
    
    // Combine breathing and scroll for Y position
    ref.current.position.y = -1.6 + breathingFloat + scrollFloat
    
    // 3. Mouse-based interaction (hover effect)
    const mouseRotationY = mousePosition.x * 0.4
    const mouseRotationX = mousePosition.y * 0.2
    
    // 4. Subtle continuous rotation
    const autoRotation = Math.sin(t * 0.3) * 0.15
    
    // Combine all rotations with smooth lerping
    const targetRotationY = mouseRotationY + scrollRotation + autoRotation
    const targetRotationX = mouseRotationX + 0.05
    
    ref.current.rotation.y += (targetRotationY - ref.current.rotation.y) * 0.08
    ref.current.rotation.x += (targetRotationX - ref.current.rotation.x) * 0.08
    
    // 5. Subtle scale pulse on scroll
    const scalePulse = 1 + Math.sin(scrollProgress * Math.PI) * 0.05
    ref.current.scale.setScalar(1.5 * scalePulse)
  })

  return (
    <primitive 
      ref={ref} 
      object={scene} 
      scale={1.5}
      position={[0, -1.6, 0]}
    />
  )
}

function Loader() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-cyan-400 text-lg animate-pulse">Loading Avatar...</div>
    </div>
  )
}

export default function AvatarScene({ scrollY }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1
    const y = -(event.clientY / window.innerHeight) * 2 + 1
    setMousePosition({ x, y })
  }

  return (
    <div 
      className="w-full h-full" 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, 3, -5]} intensity={0.4} />
        <spotLight position={[0, 8, 5]} angle={0.4} penumbra={1} intensity={0.8} castShadow />
        
        <Suspense fallback={null}>
          <Avatar scrollY={scrollY} mousePosition={mousePosition} />
          <Environment preset="city" />
          <ContactShadows 
            position={[0, -1.6, 0]} 
            opacity={0.5} 
            scale={8} 
            blur={2.5} 
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

// Preload the model
useGLTF.preload('/my_avatar.glb')
