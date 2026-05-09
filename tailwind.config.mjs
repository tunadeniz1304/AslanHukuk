/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink:    { DEFAULT: '#0a0a0a', soft: '#2a2a2a', mute: '#6b6b6b' },
        paper:  { DEFAULT: '#f5f1e8', deep: '#ebe5d3', light: '#faf7ee' },
        rule:   { DEFAULT: '#d8d2c4', soft: '#ece7da' },
        gold:   { DEFAULT: '#8a6b2a', soft: '#b59456', deep: '#6f5520' },
        noir:   '#14110b'
      },
      fontFamily: {
        serif:    ['"Playfair Display"', '"Source Serif 4"', 'Georgia', 'serif'],
        body:     ['"Source Serif 4"', 'Georgia', 'serif'],
        mono:     ['"JetBrains Mono"', '"Courier New"', 'monospace'],
        sans:     ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        editorial: '-0.025em',
        wider2:    '0.18em',
        widest2:   '0.28em'
      },
      maxWidth: {
        shell: '1440px'
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(.2,.7,.3,1)'
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        marquee: 'marquee 38s linear infinite'
      }
    }
  },
  plugins: []
};
