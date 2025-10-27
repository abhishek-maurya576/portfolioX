import { useEffect, useState, useRef } from 'react'

/**
 * Character Controller Hook
 * Manages keyboard input, movement state, and animation transitions
 */
export function useCharacterControls() {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    sprint: false,
  })

  const [animationState, setAnimationState] = useState('idle')
  const keysPressed = useRef(new Set())

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase()
      keysPressed.current.add(key)

      switch (key) {
        case 'w':
        case 'arrowup':
          setMovement((prev) => ({ ...prev, forward: true }))
          break
        case 's':
        case 'arrowdown':
          setMovement((prev) => ({ ...prev, backward: true }))
          break
        case 'a':
        case 'arrowleft':
          setMovement((prev) => ({ ...prev, left: true }))
          break
        case 'd':
        case 'arrowright':
          setMovement((prev) => ({ ...prev, right: true }))
          break
        case ' ':
          e.preventDefault()
          setMovement((prev) => ({ ...prev, jump: true }))
          break
        case 'shift':
          setMovement((prev) => ({ ...prev, sprint: true }))
          break
        default:
          break
      }
    }

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase()
      keysPressed.current.delete(key)

      switch (key) {
        case 'w':
        case 'arrowup':
          setMovement((prev) => ({ ...prev, forward: false }))
          break
        case 's':
        case 'arrowdown':
          setMovement((prev) => ({ ...prev, backward: false }))
          break
        case 'a':
        case 'arrowleft':
          setMovement((prev) => ({ ...prev, left: false }))
          break
        case 'd':
        case 'arrowright':
          setMovement((prev) => ({ ...prev, right: false }))
          break
        case ' ':
          setMovement((prev) => ({ ...prev, jump: false }))
          break
        case 'shift':
          setMovement((prev) => ({ ...prev, sprint: false }))
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  // Determine animation state based on movement
  useEffect(() => {
    const isMoving = movement.forward || movement.backward || movement.left || movement.right

    if (movement.jump) {
      setAnimationState('jump')
    } else if (isMoving && movement.sprint) {
      setAnimationState('run')
    } else if (isMoving) {
      setAnimationState('walk')
    } else {
      setAnimationState('idle')
    }
  }, [movement])

  return {
    movement,
    animationState,
    isMoving: movement.forward || movement.backward || movement.left || movement.right,
  }
}
