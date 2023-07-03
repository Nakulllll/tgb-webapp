/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#F2C94C',
        button_hover: '#F2994A',
        yellow_text: '#E1AB20',
        grey_bg: '#F0F0F0',
        gradient1: 'linear-gradient(0deg, #FFB800 80%, #7C7C7C 20%)',
        gradient2: 'linear-gradient(45deg, #000000 0%, #383838 100%)',
      },
      fontSize: {
        'primary-heading': '48px',
        'secondary-heading': '32px',
        'tertiary-heading': '26px',
        'big-text': '20px',
        'normal-text': '18px',
        'small-text':'12px'
      },
    },
  },
  plugins: [],
};
