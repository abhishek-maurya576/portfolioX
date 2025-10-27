import React, { useRef, useState } from 'react'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import { Html } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

/**
 * Interactive Zone Component
 * Creates a 3D trigger zone that displays UI content when the avatar enters
 */
export default function InteractiveZone({ 
  position, 
  size = [3, 3, 3], 
  label,
  content,
  color = '#00ffff',
  onEnter,
  onExit 
}) {
  const [isActive, setIsActive] = useState(false)
  const meshRef = useRef()

  const handleIntersectionEnter = () => {
    setIsActive(true)
    if (onEnter) onEnter()
  }

  const handleIntersectionExit = () => {
    setIsActive(false)
    if (onExit) onExit()
  }

  return (
    <group position={position}>
      {/* Visual indicator */}
      <mesh ref={meshRef}>
        <boxGeometry args={size} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={isActive ? 0.3 : 0.1}
          wireframe={!isActive}
        />
      </mesh>

      {/* Physics collider for detection */}
      <RigidBody
        type="fixed"
        sensor
        colliders={false}
        onIntersectionEnter={handleIntersectionEnter}
        onIntersectionExit={handleIntersectionExit}
      >
        <CuboidCollider args={[size[0] / 2, size[1] / 2, size[2] / 2]} />
      </RigidBody>

      {/* Floating label */}
      <Html
        position={[0, size[1] / 2 + 1, 0]}
        center
        distanceFactor={8}
        style={{ pointerEvents: 'none' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 rounded-full text-white font-bold shadow-lg"
        >
          {label}
        </motion.div>
      </Html>

      {/* Content overlay when active */}
      {isActive && content && (
        <Html
          position={[0, 0, 0]}
          center
          distanceFactor={10}
          style={{ pointerEvents: 'auto' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-dark-card border border-dark-border rounded-2xl p-6 shadow-2xl max-w-md"
          >
            {content}
          </motion.div>
        </Html>
      )}
    </group>
  )
}
