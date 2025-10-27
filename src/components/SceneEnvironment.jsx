import React from 'react'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import { Environment, Sky } from '@react-three/drei'
import InteractiveZone from './InteractiveZone'

/**
 * Scene Environment Component
 * Creates the 3D world with ground, lighting, and interactive zones
 */
export default function SceneEnvironment({ onZoneChange }) {
  // Define spatial locations for each section
  const zones = [
    {
      id: 'hero',
      position: [0, 1.5, 0],
      label: '🏠 Welcome',
      color: '#00ffff',
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2 gradient-text">Welcome!</h3>
          <p className="text-gray-300">Use WASD or Arrow keys to explore</p>
          <p className="text-sm text-gray-400 mt-2">Hold Shift to sprint • Space to jump</p>
        </div>
      ),
    },
    {
      id: 'about',
      position: [-8, 1.5, -10],
      label: '👤 About Me',
      color: '#ff00ff',
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2 gradient-text">About Me</h3>
          <p className="text-gray-300">BCA student at University of Allahabad</p>
          <p className="text-gray-300 mt-2">Passionate about software development & AI</p>
        </div>
      ),
    },
    {
      id: 'skills',
      position: [8, 1.5, -10],
      label: '⚡ Skills',
      color: '#ffff00',
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2 gradient-text">Skills</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>React</span>
              <span className="text-cyan-400">85%</span>
            </div>
            <div className="flex justify-between">
              <span>JavaScript</span>
              <span className="text-cyan-400">85%</span>
            </div>
            <div className="flex justify-between">
              <span>Python</span>
              <span className="text-cyan-400">80%</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'projects',
      position: [0, 1.5, -20],
      label: '🚀 Projects',
      color: '#00ff00',
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2 gradient-text">Featured Projects</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• Linkzy - Real-time Chat App</li>
            <li>• AI Text Summarizer</li>
            <li>• 3D Interactive Portfolio</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'contact',
      position: [0, 1.5, -30],
      label: '📧 Contact',
      color: '#ff6600',
      content: (
        <div className="text-white">
          <h3 className="text-2xl font-bold mb-2 gradient-text">Get In Touch</h3>
          <p className="text-gray-300">maurya972137@gmail.com</p>
          <div className="flex gap-3 mt-3">
            <span className="text-cyan-400">GitHub</span>
            <span className="text-cyan-400">LinkedIn</span>
            <span className="text-cyan-400">YouTube</span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <>
      {/* Sky and Environment */}
      <Sky sunPosition={[100, 20, 100]} />
      <Environment preset="night" />
      
      {/* Ambient lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#00ffff" />

      {/* Ground plane */}
      <RigidBody type="fixed" colliders={false}>
        <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#0a0a1a" />
        </mesh>
        <CuboidCollider args={[50, 0.1, 50]} position={[0, 0, 0]} />
      </RigidBody>

      {/* Grid helper for visual reference */}
      <gridHelper args={[100, 100, '#1a1a2e', '#0f0f1a']} position={[0, 0.01, 0]} />

      {/* Interactive zones */}
      {zones.map((zone) => (
        <InteractiveZone
          key={zone.id}
          position={zone.position}
          label={zone.label}
          color={zone.color}
          content={zone.content}
          onEnter={() => onZoneChange && onZoneChange(zone.id)}
        />
      ))}

      {/* Decorative elements */}
      {/* Add some floating particles or ambient objects here */}
    </>
  )
}
