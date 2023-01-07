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
