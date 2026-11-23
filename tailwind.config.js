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
        // Site colors: white background, near-black text, greens.
        // Use them in CSS with theme('colors.surface') or as classes like bg-surface
        bg: '#ffffff',
        surface: '#f6f8f6',
        'surface-2': '#edf2ee',
        line: '#dce4de', // borders (Tailwind already uses the name "border")
        ink: '#0c1a12', // primary text
        'ink-dim': '#3f4b44', // body text
        'ink-dimmer': '#5d6a62', // small labels, still readable on white
        accent: '#16a34a', // main green: buttons, highlights
        'accent-soft': '#15803d', // green for text and links (dark enough to read on white)
        'on-accent': '#ffffff', // text on green buttons
        leaf: '#15803d', // "completed" status
        'leaf-deep': '#14532d',
      },
      // Gradients for buttons, the headline and progress lines (all green)
      backgroundImage: {
        brand: 'linear-gradient(135deg, #15803d, #16a34a)',
        'brand-line': 'linear-gradient(90deg, #16a34a, #4ade80)',
        'brand-line-vertical': 'linear-gradient(180deg, #16a34a, #4ade80)',
        'brand-text': 'linear-gradient(100deg, #166534 0%, #16a34a 100%)',
      },
      fontFamily: {
        // Geist Sans for headings and text, Geist Mono for small labels
        display: ['"Geist Sans"', 'Geist', 'system-ui', 'sans-serif'],
        body: ['"Geist Sans"', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
        // Projects section: editorial serif titles (font-serif) and clean sans text (font-sans)
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
