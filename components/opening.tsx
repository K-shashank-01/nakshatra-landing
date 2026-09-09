export function Opening() {
  return (
    <section id="top" className="opening" aria-labelledby="opening-title">
      <div className="grid-lines" aria-hidden="true" />
      <div className="opening-copy">
        <span className="logo-placeholder reveal reveal-1" aria-hidden="true" />
        <h1 id="opening-title" className="opening-title reveal reveal-2">NAKSHATRA</h1>
        <p className="opening-tagline reveal reveal-3">Secure identity for every connected device</p>
      </div>
      <a className="scroll-indicator reveal reveal-4" href="#hero" aria-label="Scroll to explore">
        <span>Scroll</span>
        <span className="track" aria-hidden="true" />
      </a>
    </section>
  )
}
