/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#1d3a6e',
        },
        green: {
          accent: '#64ffda',
          dim: '#43d9b3',
        },
        slate: {
          light: '#ccd6f6',
          DEFAULT: '#8892b0',
          dark: '#495670',
        }
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
        sans: ['Calibre', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
