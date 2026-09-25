// Runs at the end of `npm run build`.
// It turns the React app into plain HTML and puts it inside <div id="root"> in dist/index.html,
// so the page shows up right away and search engines can read it.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.resolve(root, process.argv[2] || 'dist')
const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8')
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href)

const html = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`)
if (html === template) throw new Error('Could not find <div id="root"></div> in index.html')
fs.writeFileSync(path.join(outDir, 'index.html'), html)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`✓ prerendered ${path.relative(root, outDir)}/index.html`)
