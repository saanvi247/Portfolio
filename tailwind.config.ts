import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        secondary: '#111111',
        accent: {
          blue: '#3B82F6',
          purple: '#7C3AED',
        },
        primaryText: '#F8F8F8',
        mutedText: '#A1A1AA',
      },
      fontFamily: {
        heading: ['var(--font-general-sans)', 'sans-serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        quote: ['var(--font-cormorant)', 'serif'],
      },
      boxShadow: {
        'glass-sm': '0 2px 10px 0 rgba(0, 0, 0, 0.4), inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-md': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 1px 1px 0 rgba(255, 255, 255, 0.03)',
        'glass-lg': '0 12px 40px 0 rgba(0, 0, 0, 0.7), inset 0 1px 2px 0 rgba(255, 255, 255, 0.05)',
      },
      transitionProperty: {
        smooth: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.transition-smooth': {
          '@apply transition-all duration-300 ease-in-out': {},
        },
      })
    }),
  ],
}
export default config
