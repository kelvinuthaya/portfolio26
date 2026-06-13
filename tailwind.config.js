/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#e0eff5',
        'ku-text': '#0a1a24',
        'ku-body': '#2a5060',
        'ku-soft': '#2d5566',
        muted: '#5a8fa0',
        accent: '#1a7090',
        'accent-light': '#3bbfd8',
      },
      fontFamily: {
        familjen: ['"Familjen Grotesk"', 'sans-serif'],
        dm: ['"DM Sans"', 'sans-serif'],
        // Police signature — réservée au nom dans le hero (cf. @font-face dans index.css).
        hyper: ['"Ultra Hyper"', '"Familjen Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 10px rgba(20,100,130,0.07), inset 0 1px 0 rgba(255,255,255,0.90)',
        'card-hover': '0 8px 24px rgba(20,100,130,0.12), inset 0 1px 0 rgba(255,255,255,0.90)',
      },
    },
  },
  plugins: [],
}
