/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'frost-veil': '#FFFFFF',
        'polar-mist': '#F6F7F8',
        'glacial-pearl': '#EDEFF1',
        'silver-drift': '#DCE0E3',
        'cloud-quartz': '#C9CDD2',
        'frost-text': '#1a1a1a',
        'frost-text-secondary': '#4a5568',
        'frost-accent': '#3b82f6',
        'frost-accent-hover': '#2563eb',
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

