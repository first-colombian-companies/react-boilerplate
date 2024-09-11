/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#168AFF',
          dark: '#0D2639',
          mid: '#406190',
        },
        'secondary': '#F5AE19',
        'tertiary': '#F6C600',
        'foreground': '#1A1A1A',
        'success': '#2AD707',
        'success-foreground': '#3D812F',
        'background': '#FFFFFF',
        'error': '#FF7878',
      },
    },
  },
  plugins: [],
}
