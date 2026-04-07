/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        primary: {
          neon: "#8A2BE2",
          dark: "#4B0082",
          accent: "#9370DB"
        },
        gold: {
          light: "#F5D061",
          main: "#D4AF37",
          dark: "#AA8C2C"
        },
        magenta: {
          neon: "#FF00FF",
          dim: "rgba(255, 0, 255, 0.2)"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(138, 43, 226, 0.5)',
        'glow-lg': '0 0 40px rgba(138, 43, 226, 0.8)',
        'glow-gold': '0 0 15px rgba(212, 175, 55, 0.4)',
        'glow-magenta': '0 0 20px rgba(255, 0, 255, 0.4)',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}
