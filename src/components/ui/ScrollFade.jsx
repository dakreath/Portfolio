import { useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'

// Text that fades out and shrinks a little as it scrolls up past the top of the screen.
// It stays fully visible while it's in the reading area, and comes back when you scroll up.
//
// as: which element to render ('div', 'p', 'h1'...)
// Any other props (className, style...) go straight to that element.
function ScrollFade({ as = 'div', children, style, ...props }) {
  const ref = useRef(null)
  // 0 when the element's top reaches 25% from the top of the screen, 1 when its bottom leaves it
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 25%', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const Tag = m[as]

  return (
    <Tag ref={ref} style={{ ...style, opacity, scale, transformOrigin: 'left top' }} {...props}>
      {children}
    </Tag>
  )
}

export default ScrollFade
