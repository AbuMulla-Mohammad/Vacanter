/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 0px 10px -4px rgba(0,0,0,0.65)'
      },
      
      colors: {
        primary: {
          DEFAULT: '#04ADE6',//past => 2fd3de
          light: '#04ade643',//past=> 5ee0e8
          hover: '#28b8c2',
          disabled: '#b3eaf0',
        },
        secondary: {
          success: '#28A745',
          lightBackground: '#f4f4f4',
          hoverBackground: '#CED4DA',
        },
        accent: {
          error: '#e39aa1',
          warning: '#FFC107',
        },
        neutral: {
          white: '#FFFFFF', 
          text: '#505357',
          textSecondary: '#5E6368',
        },
      },
    },
  },
  plugins: [],
}