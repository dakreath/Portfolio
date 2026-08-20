/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Same palette as before, now available as Tailwind utilities
        // e.g. bg-surface, text-indigo, border-line
        bg: '#000000',
        surface: '#0f172a',
        'surface-2': '#1e293b',
        line: '#334155', // named "line" since Tailwind reserves "border" as a key
        ink: '#f1f5f9', // primary text
        'ink-dim': '#94a3b8',
        'ink-dimmer': '#64748b',
        indigo: '#6366f1',
        fuchsia: '#d946ef',
        orange: '#fb923c',
        purple: '#a855f7',
        'purple-dark': '#7e22ce',
        emerald: '#34d399',
        sky: '#38bdf8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
