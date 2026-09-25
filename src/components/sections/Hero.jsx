import { hero, site } from '../../data'
import { asset } from '../../lib/asset.js'
import Icon from '../ui/Icon.jsx'
import Magnetic from '../ui/Magnetic.jsx'
import TiltCard from '../ui/TiltCard.jsx'
import HeroGreeting from './HeroGreeting.jsx'

// The hero fades in with plain CSS (the "rise" class in index.css) instead of framer-motion,
// so it shows up right away, even before the JavaScript has loaded.
// Each line gets a slightly later start so they come in one by one.
function riseDelay(seconds) {
  return { animationDelay: `${seconds}s` }
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-text">
          <span className="eyebrow rise" style={riseDelay(0)}>
            <span className="eyebrow-dot" />
            {hero.status}
          </span>

          <h1 className="rise" style={riseDelay(0.1)}>
            {hero.headline.lead}
            <br />
            <span className="headline-accent">{hero.headline.highlight}</span>
          </h1>

          <p className="lede rise" style={riseDelay(0.2)}>
            {hero.intro}
          </p>

          <div className="hero-actions rise" style={riseDelay(0.3)}>
            {hero.actions.map((action) => (
              <Magnetic key={action.label}>
                <a className={`btn btn-${action.variant}`} href={action.href}>
                  {action.label}
                  {action.icon && <Icon name={action.icon} />}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="hero-photo-wrap rise-pop">
          <TiltCard
            className="hero-photo"
            max={8}
            whileHover={{ scale: 1.03, y: -6, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
          >
            {/* The browser picks the 400px photo on small screens and the 800px one on bigger screens */}
            <img
              src={asset(site.photo.src)}
              srcSet={`${asset(site.photo.srcSmall)} 400w, ${asset(site.photo.src)} 800w`}
              sizes="(max-width: 440px) 90vw, 400px"
              width="800"
              height="800"
              alt={site.photo.alt}
              fetchpriority="high"
              decoding="async"
            />
          </TiltCard>
          <HeroGreeting />
        </div>
      </div>
    </section>
  )
}

export default Hero
