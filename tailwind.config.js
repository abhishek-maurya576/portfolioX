/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'frost-veil': '#0a0a0a',
        'polar-mist': '#0d0d0d',
        'glacial-pearl': '#141414',
        'silver-drift': '#2a2a2a',
        'cloud-quartz': '#3a3a3a',
        'frost-text': '#f5f5f5',
        'frost-text-secondary': '#a0a0a0',
        'frost-accent': '#60a5fa',
        'frost-accent-hover': '#3b82f6',
        // CSS variable-based colors for 3D folder component
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--border)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        'folder-back': 'var(--folder-back)',
        'folder-front': 'var(--folder-front)',
        'folder-tab': 'var(--folder-tab)',
      },
    },
  },
  plugins: [],
}

