import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FE7743',
        secondary: '#EFEEEA',
        dark: '#273F4F',
        black: '#000000',
      },
    },
  },
  plugins: [],
};

export default config;