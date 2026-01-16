/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ===== CENTRALIZED THEME COLORS =====
        // These reference CSS variables from index.css

        // Primary color palette (using CSS variables)
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
          DEFAULT: 'var(--primary-600)',
        },

        // Secondary color palette
        secondary: {
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          DEFAULT: 'var(--secondary-600)',
        },

        // Tertiary color palette
        tertiary: {
          500: 'var(--tertiary-500)',
          600: 'var(--tertiary-600)',
          DEFAULT: 'var(--tertiary-600)',
        },

        // Dark theme base colors
        'frost-veil': '#0a0a0a',
        'polar-mist': '#0d0d0d',
        'glacial-pearl': '#141414',
        'silver-drift': '#2a2a2a',
        'cloud-quartz': '#3a3a3a',
        'frost-text': '#f5f5f5',
        'frost-text-secondary': '#a0a0a0',

        // Accent colors (using CSS variables)
        'frost-accent': 'var(--accent)',
        'frost-accent-hover': 'var(--accent-hover)',

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

