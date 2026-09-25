import { useEffect, useRef } from 'react'

// Small water drops fall from the mouse as it moves, and splash when you click.
// Computers only, and off for people who asked their device for less motion.
//
// How it works: one see-through <canvas> covers the whole window.
// Each drop is an object { x, y, speedX, speedY, size, life }.
// About 60 times a second we move every drop, pull it down (gravity),
// fade it a little, and draw everything again.

const MAX_DROPS = 80
const GRAVITY = 0.08
const FADE_PER_FRAME = 0.02

function WaterCursor() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const isTouchScreen = window.matchMedia('(hover: none)').matches
    const wantsLessMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouchScreen || wantsLessMotion) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let drops = []
    let frame = 0

    function fitToWindow() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function addDrops(x, y, howMany) {
      for (let i = 0; i < howMany; i++) {
        drops.push({
          x: x + (Math.random() - 0.5) * 24, // spread around the cursor
          y: y + (Math.random() - 0.5) * 24,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: Math.random() * -1, // a small hop up before falling
          size: 2 + Math.random() * 3,
          life: 1, // 1 = fully visible, 0 = gone
        })
      }
      drops = drops.slice(-MAX_DROPS) // keep only the newest ones
    }

    function drawDrop(drop) {
      // the drop: a light blue circle
      ctx.beginPath()
      ctx.arc(drop.x, drop.y, drop.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(140, 200, 255, ${0.5 * drop.life})`
      ctx.fill()

      // a tiny white shine, so it looks wet
      ctx.beginPath()
      ctx.arc(drop.x - drop.size / 3, drop.y - drop.size / 3, drop.size / 3, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${0.8 * drop.life})`
      ctx.fill()
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const drop of drops) {
        drop.speedY += GRAVITY
        drop.x += drop.speedX
        drop.y += drop.speedY
        drop.life -= FADE_PER_FRAME
        drawDrop(drop)
      }

      drops = drops.filter((drop) => drop.life > 0) // remove faded drops
      frame = requestAnimationFrame(animate) // run again on the next frame
    }

    const handleMouseMove = (event) => addDrops(event.clientX, event.clientY, 2)
    const handleClick = (event) => addDrops(event.clientX, event.clientY, 15) // splash

    fitToWindow()
    animate()
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleClick)
    window.addEventListener('resize', fitToWindow)

    // Clean up when the component is removed
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleClick)
      window.removeEventListener('resize', fitToWindow)
    }
  }, [])

  return <canvas ref={canvasRef} className="water-cursor" aria-hidden="true" />
}

export default WaterCursor
