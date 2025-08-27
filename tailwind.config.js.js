// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-cyan': '#0ff',
        'cyber-pink': '#f0f',
        'cyber-purple': '#9467fe',
        'dark-bg': '#0f172a',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'roboto-mono': ['Roboto Mono', 'monospace'],
      },
      animation: {
        'glitch': 'glitch-animation 2s infinite',
        'scanline': 'scanline 5s linear infinite',
      },
    },
  },
  plugins: [],
}