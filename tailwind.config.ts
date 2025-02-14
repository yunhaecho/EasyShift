import type { Config } from 'tailwindcss';
import 'tailwindcss-preset-px-to-rem';

export default {
  presets: [require('tailwindcss-preset-px-to-rem')],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#EEF2FF',
          200: '#A5B4FC',
          300: '#4F46E5',
          400: '#4338CA',
          500: '#3730A3',
          600: '#1E1B4B',
        },
        gray: {
          100: '#F9FAFB',
          200: '#F3F4F6',
          300: '#E5E7EB',
          400: '#D1D5DB',
          500: '#9CA3AF',
          600: '#6B7280',
          700: '#4B5563',
          800: '#1F2937',
          900: '#030712',
        },
        blue: {
          100: '#B0D6FF',
          200: '#4682FF',
          300: '#3364EE',
          400: '#143DD1',
        },
        green: {
          100: '#F0FDF4',
          200: '#7FD49B',
          300: '#0DBE4E',
          400: '#038139',
        },
        orange: {
          100: '#FFF1E7',
          200: '#FF9053',
          300: '#F66100',
          400: '#CE4700',
        },
        red: {
          100: '#FFD1CE',
          200: '#FF7C75',
          300: '#EA1206',
          400: '#C40A00',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
