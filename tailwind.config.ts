import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.2, 0.65, 0.3, 0.9)',
      },
      boxShadow: {
        'soft-glow': '0 0 20px rgba(255,255,255,0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
