import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 25px 80px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
} satisfies Config;
