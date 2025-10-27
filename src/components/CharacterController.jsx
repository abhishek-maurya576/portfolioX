import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { RigidBody, CapsuleCollider } from '@react-three/rapier'
import { useCharacterControls } from '../hooks/useCharacterControls'
import * as THREE from 'three'

const MOVE_SPEED = 5
const SPRINT_MULTIPLIER = 1.8
const JUMP_FORCE = 8
const ROTATION_SPEED = 5

export default function CharacterController({ onPositionChange, onZoneEnter }) {
  const { scene } = useGLTF('/my_avatar.glb')
  const rigidBodyRef = useRef()
  const characterRef = useRef()
  const { movement, animationState, isMoving } = useCharacterControls()
  
  const velocity = useRef(new THREE.Vector3())
  const direction = useRef(new THREE.Vector3())
  const rotation = useRef(0)

  useFrame((state, delta) => {
    if (!rigidBodyRef.current || !characterRef.current) return

    const rb = rigidBodyRef.current
    const linvel = rb.linvel()
    
    // Calculate movement direction
    direction.current.set(0, 0, 0)
    
    if (movement.forward) direction.current.z -= 1
    if (movement.backward) direction.current.z += 1
    if (movement.left) direction.current.x -= 1
    if (movement.right) direction.current.x += 1
    
    // Normalize direction
    if (direction.current.length() > 0) {
      direction.current.normalize()
    }
    
    // Apply speed
    const speed = movement.sprint ? MOVE_SPEED * SPRINT_MULTIPLIER : MOVE_SPEED
    velocity.current.x = direction.current.x * speed
    velocity.current.z = direction.current.z * speed
    velocity.current.y = linvel.y // Preserve vertical velocity
    
    // Apply velocity
    rb.setLinvel(velocity.current, true)
    
    // Handle jump
    if (movement.jump && Math.abs(linvel.y) < 0.1) {
      rb.applyImpulse({ x: 0, y: JUMP_FORCE, z: 0 }, true)
    }
    
    // Rotate character to face movement direction
    if (isMoving) {
      const targetRotation = Math.atan2(direction.current.x, direction.current.z)
      rotation.current = THREE.MathUtils.lerp(
        rotation.current,
        targetRotation,
        delta * ROTATION_SPEED
      )
      characterRef.current.rotation.y = rotation.current
    }
    
    // Breathing animation when idle
    if (!isMoving) {
      const breathe = Math.sin(state.clock.elapsedTime * 1.5) * 0.02
      characterRef.current.position.y = breathe
    }
    
    // Notify parent of position changes
    if (onPositionChange) {
      const pos = rb.translation()
      onPositionChange({ x: pos.x, y: pos.y, z: pos.z })
    }
  })

  return (
    <RigidBody
      ref={rigidBodyRef}
      colliders={false}
      mass={1}
      type="dynamic"
      position={[0, 2, 0]}
      enabledRotations={[false, true, false]}
      lockRotations
    >
      <CapsuleCollider args={[0.5, 0.5]} position={[0, 1, 0]} />
      <group ref={characterRef}>
        <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
      </group>
    </RigidBody>
  )
}

useGLTF.preload('/my_avatar.glb')
