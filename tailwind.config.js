/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      git: ['git-sans'],
      gaegu: ['gaegu', 'cursive']
    },
    extend: {
      colors: {
        purple: '#522AB1',
        orange: '#F4C268',
        background: '#F9F6EF',
        ink: '#282828'
      }
    }
  },
  plugins: []
}
