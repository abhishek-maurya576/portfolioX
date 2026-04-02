import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Initialize Lenis for smooth scrolling (optimized settings)
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  duration: 0.9,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1.2,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
  syncTouch: false,
  touchInertiaMultiplier: 35,
  autoResize: true,
})

// Use optimized RAF loop
let rafId
function raf(time) {
  lenis.raf(time)
  rafId = requestAnimationFrame(raf)
}

rafId = requestAnimationFrame(raf)

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (rafId) cancelAnimationFrame(rafId)
  lenis.destroy()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
