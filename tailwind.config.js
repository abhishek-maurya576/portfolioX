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
      },
    },
  },
  plugins: [],
}
