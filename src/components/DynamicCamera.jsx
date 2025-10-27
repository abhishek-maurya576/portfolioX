import React, { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

/**
 * Dynamic Camera Component
 * Manages camera behavior: Exploration mode (third-person) and Read mode (fixed view)
 */
export default function DynamicCamera({ 
  target, 
  mode = 'exploration', 
  readModePosition = [0, 3, 8] 
}) {
  const { camera } = useThree()
  const targetPosition = useRef(new THREE.Vector3())
  const currentPosition = useRef(new THREE.Vector3())
  const lookAtTarget = useRef(new THREE.Vector3())

  useEffect(() => {
    // Initialize camera position
    currentPosition.current.copy(camera.position)
  }, [camera])

  useFrame((state, delta) => {
    if (!target) return

    if (mode === 'exploration') {
      // Third-person camera following the avatar
      const offset = new THREE.Vector3(0, 3, 8)
      
      // Calculate target position behind and above the avatar
      targetPosition.current.copy(target.position).add(offset)
      
      // Smooth camera movement
      currentPosition.current.lerp(targetPosition.current, delta * 3)
      camera.position.copy(currentPosition.current)
      
      // Look at avatar
      lookAtTarget.current.copy(target.position)
      lookAtTarget.current.y += 1.5 // Look at avatar's head height
      camera.lookAt(lookAtTarget.current)
      
    } else if (mode === 'read') {
      // Fixed camera for reading content
      targetPosition.current.set(...readModePosition)
      
      // Smooth transition to read position
      currentPosition.current.lerp(targetPosition.current, delta * 2)
      camera.position.copy(currentPosition.current)
      
      // Look at target
      if (target) {
        lookAtTarget.current.copy(target.position)
        lookAtTarget.current.y += 1.5
        camera.lookAt(lookAtTarget.current)
      }
    }
  })

  return null
}
