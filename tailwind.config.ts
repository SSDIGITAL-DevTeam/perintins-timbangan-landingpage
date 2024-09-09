import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'Lato, sans-serif',
      },
      colors: {
        background: '#F6F6F6',
        primary: '#D70700',
        secondary: '#B10903',
        tertiary: '#FFFAF1',
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1240px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
};
export default config;
