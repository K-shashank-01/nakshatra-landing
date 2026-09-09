'use client'

import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Terms', href: '#terms' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Contact', href: '#contact' },
]

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  )
}

function Header({ visible }: { visible: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`site-header ${visible ? 'site-header-visible' : ''}`}>
      <a className="wordmark" href="#top" aria-label="Nakshatra home">
        <Mark /> NAKSHATRA
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span />
        <span />
      </button>
      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
        </nav>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-frame" />
      <div className="hero-copy">
        <p className="eyebrow reveal reveal-delay-1">An independent motion studio</p>
        <h1 id="hero-title" className="hero-title reveal reveal-delay-2">NAKSHATRA</h1>
        <p className="hero-subtitle reveal reveal-delay-3">stories shaped by light</p>
      </div>
      <div className="hero-meta reveal reveal-delay-4">
        <span>Bombay / Worldwide</span>
        <span>Scroll to explore</span>
      </div>
      <a className="scroll-cue reveal reveal-delay-4" href="#features" aria-label="Scroll to features">
        <span className="scroll-line" />
        <span>01</span>
      </a>
    </section>
  )
}

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span />{children}</p>
}

function ContentSections() {
  return (
    <div className="content-shell">
      <section id="features" className="manifesto section-block" aria-labelledby="features-title">
        <SectionLabel>Our point of view</SectionLabel>
        <div className="manifesto-copy">
          <h2 id="features-title">We make images that <em>stay</em> with you.</h2>
          <p>NAKSHATRA is a film and creative studio for ideas that deserve a little more atmosphere. We work across film, identity, and experience to find the quiet pulse inside a story.</p>
        </div>
      </section>

      <section className="services section-block" aria-labelledby="services-title">
        <SectionLabel>What we do</SectionLabel>
        <div className="services-grid">
          <h2 id="services-title">Built for the<br /><em>unforgettable.</em></h2>
          <div className="service-list">
            {['Film direction', 'Visual identity', 'Title sequences', 'Digital worlds'].map((service, index) => (
              <div className="service-row" key={service}>
                <span className="service-number">0{index + 1}</span>
                <span>{service}</span>
                <span className="service-arrow" aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="statement section-block">
        <p className="statement-text">The space between<br /><em>what is</em> and what could be.</p>
        <p className="statement-note">Selected work / 2020—24</p>
      </section>

      <section id="terms" className="contact-panel section-block" aria-labelledby="contact-title">
        <SectionLabel>Start a conversation</SectionLabel>
        <div className="contact-row">
          <h2 id="contact-title">Have something<br /><em>in mind?</em></h2>
          <a className="contact-link" id="contact" href="mailto:hello@nakshatra.studio">hello@nakshatra.studio <span>↗</span></a>
        </div>
      </section>

      <div id="privacy" className="legal-note">
        <span>NAKSHATRA STUDIO © 2024</span>
        <span>All stories reserved.</span>
      </div>
    </div>
  )
}

export default function Page() {
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setHeaderVisible(window.scrollY > window.innerHeight * 0.72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>
      <Header visible={headerVisible} />
      <Hero />
      <ContentSections />
    </main>
  )
}
