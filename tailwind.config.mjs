/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink:    { DEFAULT: '#0a0a0a', soft: '#2a2a2a', mute: '#5a5a5a' },
        paper:  { DEFAULT: '#f5f1e8', deep: '#ebe5d3', light: '#faf7ee' },
        rule:   { DEFAULT: '#d8d2c4', soft: '#ece7da' },
        gold:   { DEFAULT: '#b89150', soft: '#d2ae6f', deep: '#8a6b2a' },
        noir:   { DEFAULT: '#0e0c08', soft: '#1a1610' },
        whatsapp: { DEFAULT: '#25D366', deep: '#128C7E' }
      },
      fontFamily: {
        display:  ['Fraunces', 'Georgia', 'serif'],
        serif:    ['Fraunces', 'Georgia', 'serif'],
        body:     ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        sans:     ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono:     ['"JetBrains Mono"', '"Courier New"', 'monospace']
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
        },
        wapulse: {
          '0%, 100%':  { boxShadow: '0 0 0 0 rgba(37,211,102,0.55)' },
          '50%':       { boxShadow: '0 0 0 14px rgba(37,211,102,0)' }
        }
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        wapulse: 'wapulse 2.4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
