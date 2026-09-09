'use client'

import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Terms', href: '#terms' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader({ visible }: { visible: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`site-header ${visible ? 'site-header-visible' : ''}`}>
      <a className="wordmark" href="#top" aria-label="Nakshatra home">
        <span className="brand-mark" aria-hidden="true" />
        NAKSHATRA
      </a>

      <nav className="desktop-nav" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="login" href="#contact">Login</a>
        <a className="btn-primary" href="#contact">Get Started</a>
      </div>

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
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <a className="mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get Started</a>
        </nav>
      )}
    </header>
  )
}
