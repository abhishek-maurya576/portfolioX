// Throttle function for performance optimization
export function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Debounce function for performance optimization
export function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Request Animation Frame throttle for smooth animations
export function rafThrottle(callback) {
  let rafId = null;
  let lastArgs;

  return function(...args) {
    lastArgs = args;
    
    if (rafId) return;
    
    rafId = requestAnimationFrame(() => {
      callback.apply(this, lastArgs);
      rafId = null;
    });
  };
}

