import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite is the tool that runs your dev server and bundles the app for production.
// This config just tells it "this is a React project" — you shouldn't need to touch it.
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-react/",
})
