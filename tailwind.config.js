/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // These class names are built in code (like `skill--${status}`), so Tailwind can't find them
  // on its own. Listing them here makes sure their styles are kept.
  safelist: [
    'badge--completed',
    'badge--pending',
    'dot--completed',
    'dot--pending',
    'dot--learning',
    'skill--completed',
    'skill--pending',
    'skill--learning',
    'btn-primary',
    'btn-secondary',
  ],
  theme: {
    extend: {
      colors: {
        // Site colors. Use them in CSS with theme('colors.surface') or as classes like bg-surface
        bg: '#000000',
        surface: '#0f172a',
        'surface-2': '#1e293b',
        line: '#334155', // borders (Tailwind already uses the name "border")
        ink: '#f1f5f9', // primary text
        'ink-dim': '#94a3b8',
        'ink-dimmer': '#8290a6', // small labels, still easy to read on dark backgrounds
        accent: '#4f46e5', // main accent: buttons, links, highlights
        'accent-soft': '#a5b4fc', // lighter accent for text on dark backgrounds
        indigo: '#6366f1',
        fuchsia: '#d946ef',
        orange: '#fb923c',
        purple: '#a855f7',
        'purple-dark': '#7e22ce',
        emerald: '#34d399',
        sky: '#38bdf8',
      },
      // Gradients for buttons, the headline and progress lines
      backgroundImage: {
        brand: 'linear-gradient(135deg, #4f46e5, #c026d3)',
        'brand-line': 'linear-gradient(90deg, #6366f1, #d946ef, #fb923c)',
        'brand-line-vertical': 'linear-gradient(180deg, #6366f1, #d946ef, #fb923c)',
        'brand-text': 'linear-gradient(100deg, #6366f1 0%, #d946ef 55%, #fb923c 100%)',
      },
      fontFamily: {
        // Geist Sans for headings and text, Geist Mono for small labels
        display: ['"Geist Sans"', 'Geist', 'system-ui', 'sans-serif'],
        body: ['"Geist Sans"', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
