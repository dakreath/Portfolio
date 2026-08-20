# Dak — Portfolio (React + Tailwind version)

A personal portfolio website built with React and Tailwind CSS to showcase my projects, technical skills, and experience.
Styling is a mix of **Tailwind CSS** (for layout, spacing, and typography) and a small amount of
**plain CSS** (for effects Tailwind can't express — gradient text, the
gradient-border mask trick, glow shadows).

## How to run it

You need [Node.js](https://nodejs.org) installed (any recent version works).
Then, in this folder:

```bash
npm install     # downloads React, Vite, Tailwind, and framer-motion (one-time)
npm run dev     # starts a local dev server
```

Open the URL it prints (usually `http://localhost:5173`). Every time you
save a file, the page updates instantly — no need to restart anything.

When you're ready to publish it, run:

```bash
npm run build   # produces a "dist" folder you can deploy anywhere
```

## How the project is organized

```
index.html             Vite's entry HTML file
tailwind.config.js      Custom colors (indigo, purple, emerald, ink(white, medium white lesee white)...) and fonts
postcss.config.js       Wires Tailwind into the build (don't need to touch it)
src/
  main.jsx               Boots React and renders <App />/backbone of react
  App.jsx                 Top-level state (mobile menu, background color)
  index.css               Tailwind + custom CSS — see below
  components/
    Navbar.jsx             Logo, nav links, resume button, swatches, menu toggle
    Hero.jsx                Headline + animated photo (uses framer-motion)
    About.jsx                Bio + "core stack" panel
    Projects.jsx              Project cards (currently all "pending")
    Skills.jsx                 Skills grid, driven by a small data array
    Contact.jsx                 Contact section
    Footer.jsx                   Footer
    FloatingCTA.jsx               The round chat-bubble button, bottom-right
public/
 
```

## How the styling is split (Tailwind vs. plain CSS)

Open `src/index.css` — it's organized in two parts:

1. **`@layer components`** — every named class (`.nav-cta`, `.btn-primary`,
   `.project-card`, etc.) is built entirely from Tailwind utility classes
   using `@apply`. For example:
   ```css
   .btn-primary {
     @apply text-white px-6 py-3 rounded-[10px] font-semibold ...;
   }
   ```
   This is the same as writing `className="text-white px-6 py-3 rounded-[10px] font-semibold"`
   directly in JSX, just given a readable name so the JSX stays clean.

2. **Plain CSS at the bottom** — only for things Tailwind genuinely can't
   do: the gradient-filled headline text, the gradient-colored 1px borders
   (a CSS mask trick), and glow-style box-shadows. These use
   `theme('colors.indigo')` to still pull from the same color palette
   defined in `tailwind.config.js`, so there's only ever one place to change
   a color.

If you want to change a color across the whole site, edit
`tailwind.config.js` — every `@apply`'d utility and every `theme()` call in
the plain CSS will pick it up automatically.

## The main things worth understanding

- **Each file in `components/` is one function that returns JSX** — JSX
  looks like HTML but it's actually JavaScript, which is why you use
  `className` instead of `class`, and `{ }` to drop in JavaScript values.

- **Data lives at the top of a few files** as plain arrays/objects
  (`coreStack` in About.jsx, `skillCategories` in Skills.jsx, `projects` in
  Projects.jsx, `swatches` in App.jsx). Edit those arrays instead of hunting
  through JSX — this is the main thing you'll actually touch.

- **State lives in `App.jsx`** (`menuOpen`, `activeSwatch`) and gets passed
  down to `Navbar` as props, since Navbar is the only component that needs
  it. This "lift state to the closest shared parent" pattern is one of the
  first React habits worth getting comfortable with.



