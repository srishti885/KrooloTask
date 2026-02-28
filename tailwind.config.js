/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        nodeAppear: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        flow: {
          '0%': { strokeDashoffset: '20' }, // Thoda change kiya hai speed ke liye
          '100%': { strokeDashoffset: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(79, 70, 229, 0.4)' },
          '50%': { boxShadow: '0 0 0 15px rgba(79, 70, 229, 0)' },
        },
      },
      animation: {
        nodeAppear: 'nodeAppear 0.5s ease-out forwards',
        flow: 'flow 1s linear infinite',
        float: 'float 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s infinite',
        'spin-slow': 'spin 10s linear infinite',
        'spin-reverse-slow': 'spin 15s linear infinite reverse',
      },
    },
  },
  plugins: [],
}