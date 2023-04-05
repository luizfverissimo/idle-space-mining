/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'exo': ['"Exo"', 'sans-serif'],
      },
      colors: {
        "primary": "#48E100",        
        "secondary": "#7c3aed",        
        "accent": "#f97316",        
        "neutral": "#1f2937",        
        "base-100": "#3E3D7A",        
        "info": "#61ABF5",        
        "success": "#75E1CF",        
        "warning": "#F88812",        
        "error": "#E94E6D",
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '0%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        }
      },
      animation: {
        shake: 'shake 0.7s cubic-bezier(.36,.07,.19,.97) both'
      } 
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {        
          "primary": "#48E100",        
          "secondary": "#7c3aed",        
          "accent": "#f97316",        
          "neutral": "#1f2937",        
          "base-100": "#3E3D7A",        
          "info": "#61ABF5",        
          "success": "#75E1CF",        
          "warning": "#F88812",        
          "error": "#E94E6D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
