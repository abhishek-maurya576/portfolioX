/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      colors: {
        // ===== CENTRALIZED THEME COLORS =====
        // Primary color palette - Amber/Gold (CSS variables)
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

        // Secondary color palette (Warm Teal)
        secondary: {
          500: 'var(--secondary-500)',
          600: 'var(--secondary-600)',
          700: 'var(--secondary-700)',
          DEFAULT: 'var(--secondary-600)',
        },

        // Tertiary color palette (Coral)
        tertiary: {
          500: 'var(--tertiary-500)',
          600: 'var(--tertiary-600)',
          DEFAULT: 'var(--tertiary-600)',
        },

        // Dark theme base colors - warm zinc palette
        'frost-veil': '#09090b',
        'polar-mist': '#0a0a0a',
        'glacial-pearl': '#18181b',
        'silver-drift': '#27272a',
        'cloud-quartz': '#3f3f46',
        'frost-text': '#fafafa',
        'frost-text-secondary': '#a1a1aa',

        // Accent colors
        'frost-accent': 'var(--accent)',
        'frost-accent-hover': 'var(--accent-hover)',

        // CSS variable-based colors
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
